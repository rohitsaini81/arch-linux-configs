from scrape_me import scrape

from bs4 import BeautifulSoup
import urllib3
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)
from Logger import logger
from create import create_connection





def filter_it_list(url):

    html_content = scrape(url)
    soup = BeautifulSoup(html_content, "html.parser")
    divs = soup.find_all("div", class_=["col", "col-12"])
    
    divs = soup.select("div.col.col-12")

    for div in divs:
        # Find the <h2 class="card-title"> inside the div
        h2_tag = div.find("h2", class_="card-title")
        img_tag = div.find("img", class_=["img-fluid", "d-block", "mx-auto", "img-format-landscape", "card-img-top", "h-auto", "rounded-top-4"])
        if not h2_tag:
            continue


        # Find the <a class="stretched-link"> inside that <h2>
        a_tag = h2_tag.find("a", class_="stretched-link")
        p_tag = div.find("p", class_="card-text")
        # li_ul_tag = div.find_all("span", class_="card-tags-fade-end")
        li_ul_tag = div.find_all("li")
        if a_tag:
            # print(a_tag.get_text(strip=True)) # in side h2 heading title 
            # print(p_tag.get_text(strip=True)) paragraph
            # print(li_ul_tag)
            # print(img_tag.get("src"))
            # print(a_tag.get("href")) preview url 

            title = a_tag.get_text(strip=True)
            description = p_tag.get_text(strip=True)
            thumbnail_url = img_tag.get("src")
            tags = li_ul_tag
            # tags_str = ", ".join(tags)  # "Python, Web, Database"
            print(tags)
            return


            

            # create_db
            db_response = create_blog(title, thumbnail_url, description, tags)
            print(db_response)


            # return

            # If you want the link too:
            # print(a_tag['href'])

            # filter_it_preview(a_tag.get("href"))








def filter_it_preview(url):
    html_content = scrape(url)
    soup = BeautifulSoup(html_content, "html.parser")
    divs = soup.find_all("div", class_=["commonmark_content"])
    return divs

    
 





def create_blog(title, thumbnail_url, short_description, tags):
    connection = create_connection()
    if connection:
        try:
            with connection.cursor() as cursor:
                print("query")
                insert_query = '''
                    INSERT INTO blogs (title, thumbnail_url, short_description, tags)
                    VALUES (%s, %s, %s, %s)
                    RETURNING *;
                '''
                cursor.execute(insert_query, (title, thumbnail_url, short_description, tags))

                row = cursor.fetchone()
                print("fetchone result:", row)

                if row:
                    columns = [desc[0] for desc in cursor.description]
                    blog = dict(zip(columns, row))
                else:
                    blog = None

                connection.commit()
                print("✅ Blog inserted successfully.")
                print(blog)
                print("---------------------------")
                return blog
        except Exception as error:
            print(f"❌ Error: {error}")
            connection.rollback()
        finally:
            connection.close()




uri = "https://www.ionos.com/digitalguide/"
# uri = "https://www.ionos.com/digitalguide/websites/website-creation/the-best-website-builders/"
# uri = "https://www.ionos.com/digitalguide/items.json?tx_guides_loadarticleslist[action]=list&tx_guides_loadarticleslist[contentUid]=0&tx_guides_loadarticleslist[controller]=LoadArticles&tx_guides_loadarticleslist[currentPageUid]=1&tx_guides_loadarticleslist[firstResult]=20&tx_guides_loadarticleslist[hideArticles]=&tx_guides_loadarticleslist[hideTopArticles]=1&tx_guides_loadarticleslist[layout]=0&tx_guides_loadarticleslist[maxResults]=10&tx_guides_loadarticleslist[stickyArticles]=&cHash=e57aef3f251abea1fd8ee9e9f54b8773"




filter_it_list(uri)












