---

# Virtual Camera Setup on Arch Linux (Wayland + Firefox)

This document describes how to create and use a **virtual webcam** on **Arch Linux** using **v4l2loopback**, **PipeWire**, and **Firefox on Wayland**.

---

## 1. System Context

* **OS**: Arch Linux
* **Session type**: Wayland (`XDG_SESSION_TYPE=wayland`)
* **Browser**: Firefox (native, Wayland)
* **Audio/Video stack**: PipeWire + WirePlumber
* **Goal**: Make a `v4l2loopback` virtual camera visible in Firefox

---

# Virtual Camera Setup on Arch Linux (Wayland + Firefox)

## 1. Install v4l2loopback and Utilities

```bash
sudo pacman -Sy v4l2loopback-dkms v4l-utils
```

* `v4l2loopback-dkms`: Kernel module for virtual cameras
* `v4l-utils`: Utilities to manage video devices

---

## 2. Load the Virtual Camera Module

```bash
sudo modprobe v4l2loopback video_nr=10 card_label="Virtual Camera" exclusive_caps=1
```

* `video_nr=10`: Assigns device as `/dev/video10`
* `exclusive_caps=1`: Ensures compatibility with apps like Firefox and OBS

---

## 3. Verify Devices

```bash
v4l2-ctl --list-devices
```

Expected output:

```
Virtual Camera (platform:v4l2loopback-010):
    /dev/video10

Integrated Camera: Integrated C (usb-0000:00:14.0-7):
    /dev/video0
    /dev/video1
    /dev/media0
```

Check permissions:

```bash
ls -l /dev/video10
```

Expected:

```
crw-rw----+ 1 root video 81, 2 Dec 20 11:32 /dev/video10
```

---

## 4. Verify Session Type

```bash
echo $XDG_SESSION_TYPE
```

Expected:

```
wayland
```

> Firefox on Wayland requires PipeWire to see virtual cameras.

---

## 5. Check Installed PipeWire Packages

```bash
pacman -Qs pipewire
```

Expected output:

```
local/gst-plugin-pipewire 1:1.4.9-1 Multimedia graph framework - pipewire plugin
local/libpipewire 1:1.4.9-1 Low-latency audio/video router and processor - client library
local/libwireplumber 0.5.12-1 Session / policy manager implementation for PipeWire - client library
local/pipewire 1:1.4.9-1 Low-latency audio/video router and processor
local/pipewire-alsa 1:1.4.9-1 Low-latency audio/video router and processor - ALSA configuration
local/pipewire-audio 1:1.4.9-1 Low-latency audio/video router and processor - Audio support
local/pipewire-jack 1:1.4.9-1 Low-latency audio/video router and processor - JACK replacement
local/pipewire-pulse 1:1.4.9-1 Low-latency audio/video router and processor - PulseAudio replacement
local/wireplumber 0.5.12-1 Session / policy manager implementation for PipeWire
```

> Ensure `pipewire-v4l2` is installed to expose virtual cameras to Wayland apps like Firefox.

---

## 6. Summary

* Virtual camera created at `/dev/video10`
* Integrated camera remains at `/dev/video0`
* Session type is Wayland
* PipeWire stack installed for multimedia routing

This configuration allows **Wayland apps** (e.g., Firefox) to potentially access both **real** and **virtual cameras**, once PipeWire V4L2 bridge is installed and services restarted.

---

On **Wayland**, Firefox **does not access `/dev/video*` devices directly**.

Instead:

* Firefox → PipeWire → Camera Portal
* Only cameras **exposed by PipeWire** appear in Firefox
* `v4l2loopback` alone is **not enough**

👉 **`pipewire-v4l2` is required** to bridge V4L2 devices into PipeWire.

---

## 3. Required Packages

### Kernel & utilities

```bash
sudo pacman -S v4l2loopback-dkms v4l-utils
```

### PipeWire stack (already present on most systems)

```bash
pipewire
libpipewire
wireplumber
pipewire-pulse
```

### Critical bridge (often missing)

```bash
pipewire-v4l2
```

⚠️ On Arch, this **requires a full system upgrade**.

---

## 4. Fixing Dependency Errors (IMPORTANT)

If you see errors like:

```
breaks dependency 'libpipewire=...'
```

This means your system is **partially upgraded**.

### Correct fix

```bash
sudo pacman -Syu
```

Then install:

```bash
sudo pacman -S pipewire-v4l2
```

Arch **does not support partial upgrades**.

---

## 5. Load v4l2loopback Module

### Manual load (for testing)

```bash
sudo modprobe v4l2loopback video_nr=10 card_label="Virtual Camera" exclusive_caps=1
```

### Verify device

```bash
v4l2-ctl --list-devices
```

Expected:

```
Virtual Camera:
  /dev/video10
```

---

## 6. Make v4l2loopback Persistent (Recommended)

### Load module at boot

```bash
sudo tee /etc/modules-load.d/v4l2loopback.conf <<< "v4l2loopback"
```

### Set module options

```bash
sudo tee /etc/modprobe.d/v4l2loopback.conf <<EOF
options v4l2loopback video_nr=10 card_label="Virtual Camera" exclusive_caps=1
EOF
```

---

## 7. Restart PipeWire Services

After installing `pipewire-v4l2`:

```bash
systemctl --user restart pipewire pipewire-pulse wireplumber
```

---

## 8. Verify PipeWire Sees the Virtual Camera

### Check device graph

```bash
wpctl status
```

or:

```bash
pw-cli list-objects | grep -i video
```

You should see **Virtual Camera** listed.

---

## 9. Firefox Configuration (Wayland)

Open:

```
about:config
```

Ensure these settings are **true**:

| Key                                  | Value |
| ------------------------------------ | ----- |
| `media.webrtc.camera.allow-pipewire` | true  |
| `media.webrtc.camera.allow-v4l2`     | true  |
| `media.navigator.video.enabled`      | true  |

Restart Firefox after changing.

---

## 10. Feed Video Into the Virtual Camera

A v4l2loopback device outputs **nothing by default**.

### Test pattern (FFmpeg)

```bash
ffmpeg -re -f lavfi -i testsrc=size=1280x720:rate=30 \
  -f v4l2 /dev/video10
```

Without this, the camera may appear **black** in Firefox.

---

## 11. Test in Browser

Use one of these pages:

* [https://mozilla.github.io/webrtc-landing/gum_test.html](https://mozilla.github.io/webrtc-landing/gum_test.html)
* [https://webrtc.github.io/samples/src/content/devices/input-output/](https://webrtc.github.io/samples/src/content/devices/input-output/)

You should now see:

* Integrated Camera
* Virtual Camera

---

## 12. Common Problems & Fixes

### Virtual camera not visible in Firefox

* `pipewire-v4l2` not installed
* PipeWire services not restarted
* Firefox running under Wayland without PipeWire permissions

### Dependency errors with pacman

* Run `sudo pacman -Syu` (mandatory)

### Black screen

* No video stream is being sent to `/dev/video10`

---

## 13. Summary

✔ `v4l2loopback` creates the device
✔ `pipewire-v4l2` exposes it to PipeWire
✔ Firefox (Wayland) can now see it
✔ FFmpeg or OBS feeds video into it

This setup is **correct and supported** on Arch Linux.

---
