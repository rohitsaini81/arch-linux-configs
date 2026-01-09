section .data
    msg db "Hello, world!"
    len equ $ - msg

section .text
    global _start

_start:
    mov eax, 4      ; sys_write
    mov ebx, 1      ; stdout
    mov ecx, msg    ; address of message
    mov edx, len    ; length
    int 0x80

    mov eax, 1      ; sys_exit
    xor ebx, ebx    ; exit code 0
    int 0x80

