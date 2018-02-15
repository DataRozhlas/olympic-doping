// namalovat zakladni zobrazeni
var menu = '<div id="menu">'
Object.keys(latky).forEach(function(l) {
    menu += '<div alt="' + l + '" class="fet"><img src="https://dev.datarozhlas.cz/olympiada-doping/img/' + latky[l].img + '.jpg" class="ico"><br>' + l + '</div>'
})
menu += '</div>'
$('#hra').append(menu)
$('#hra').append('<div id="hvezdy">'
    + '<div class="persona Armstrong"><img alt="armstrong" src="https://dev.datarozhlas.cz/olympiada-doping/img/armstrong.jpg" class="ico hvezda"><br>Armstrong</div>'
    + '<div class="persona "><img alt="chambers" src="https://dev.datarozhlas.cz/olympiada-doping/img/chambers.jpg" class="ico hvezda"><br>Chambers</div>'
    + '</div>')
$('#hra').append('<div id="sport"><img class="sportimg" src="https://dev.datarozhlas.cz/olympiada-doping/img/clovek.jpg"></div>')
$('#details').html('<p class="servisni">Vyberte si doping</p>')

var list_omit = ['sporty', 'Aplikace', 'zdroje', 'img', 'img_sporty', 'Skupina', 'Sporty']

$('.fet').on('click', function(e) {
    $('.servisni').remove();
    var fet = $(this).attr("alt");
    $('.sel').removeClass('sel')
    $(this).addClass('sel')
    
    var detail = '<div class="detail" alt="' + fet + '"><b>' + fet + '</b><br>'

    Object.keys(latky[fet]).forEach(function(key) {
        if (list_omit.indexOf(key) == -1) {
            detail += '<b>' + key + ':</b> ' +  latky[fet][key] + '<br>'
        }
    })

    var imgs = ''
    latky[fet].img_sporty.split(', ').forEach(function(key) {
        imgs += '<img class="sportimg" src="https://dev.datarozhlas.cz/olympiada-doping/img/' + key + '.gif">'
    });

    detail += '</div>'
    $('#details').html(detail)
    $('#sport').html(imgs)
})

var armstrong = ['Anabolické steroidy', 'Lidský růstový hormon', 'Testosteron', 'Kortizol', 'Krevní transfúze'];
var chambers = ['Tetrahydrogestrinon', 'Testosteron', 'Erytropoetin', 'HGH', 'Inzulin', 'Modafinil', 'Lidský růstový hormon'];

function unwind(arr) {
    var out = '';
    arr.forEach(function(e) {
        out += e + '<br>'
        $('div[alt="' + e + '"]').addClass('sel')
    })

    return out;
};

$('.persona').on('click', function(e) {
    $('.servisni').remove();
    $('.sel').removeClass('sel')
    $(this).addClass('sel')
    var per = e.target.alt;

    if (per == 'armstrong') {
        $('#sport').html('<img class="sportimg" src="https://dev.datarozhlas.cz/olympiada-doping/img/cyklo.gif">')
        $('#details').html('<b>' + unwind(armstrong) + '</b>')
    } else {
        $('#sport').html('<img class="sportimg" src="https://dev.datarozhlas.cz/olympiada-doping/img/sprint.gif">')
        $('#details').html('<b>' + unwind(chambers) + '</b>')
    }

});