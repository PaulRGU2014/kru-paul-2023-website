# kru-paul-2023-website
## This is for Strapi backend
### Strapi Api -- how to populate

+ On About (With photo)
http://localhost:1337/api/kru-paul-website?populate[About][populate]=subMediaCard.Media

+ On Education (No Photo)
http://localhost:1337/api/education?populate[Education][populate]=*
