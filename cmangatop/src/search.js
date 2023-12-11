load('libs.js')
function execute(key) {
    let allItem = fetch('https://cmangaaz.com/api/search?opt1='+key).json()
    let data = [];
    allItem.forEach(item => data.push({
            name: titleCase(item.name),
            link: item.url+'-'+item.id_book,
            cover: 'https://cmangaaz.com/assets/tmp/book/avatar/'+item.avatar+'.jpg',
            description: 'Chap '+ item.last_chapter,
            host: "https://cmangaaz.com"
        })
    );
    return Response.success(data)
}
