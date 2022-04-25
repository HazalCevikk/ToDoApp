/* document.querySelector('.card').addEventListener('mousemove', degistir)
function degistir(e){
    document.querySelector('.container').style.backgroundColor = `rgb(${e.clientX % 255},${e.clientY % 255},${(e.clientX + e.clientY) % 255}, 0.7)`
   }
 */
let gorevListesi = document.querySelector('.list');
let yeniGorev= document.querySelector('input');
let gorevEkle = document.getElementById('btn')


gorevEkle.addEventListener('click', gorevOlustur);


function gorevOlustur(e){
    e.preventDefault();
    
    if(yeniGorev.value!==''){ 
    //div oluşturma
    const gorevDiv = document.createElement('div')
    gorevDiv.classList.add('item-container');
    //li oluşturma
    const gorevLi= document.createElement('li');
    gorevLi.classList.add('list-item')
    gorevLi.innerText= yeniGorev.value
    //li'yi Div'in İçerisine yerleştirme
    gorevDiv.appendChild(gorevLi);
  

    //yeni göreve buttonları ekleme işlemi
    
    const yeniButton= document.createElement('button');
    yeniButton.classList.add('btn');
    yeniButton.classList.add('btn-tamamlandi');
    yeniButton.innerHTML='<i class="fa-solid fa-check"></i>';
    gorevDiv.appendChild(yeniButton);
   
    const yeniTrash= document.createElement('button');
    yeniTrash.classList.add('btn');
    yeniTrash.classList.add('trash');
    yeniTrash.classList.add('btn-sil');
    yeniTrash.innerHTML='<i class="fa-solid fa-trash-can"></i>';
    gorevDiv.appendChild(yeniTrash);
    
    

    yeniGorev.value= ''
    //ul'ye yeni Divi ekleme;
    gorevListesi.appendChild(gorevDiv);
}
}


gorevListesi.addEventListener('click', goreviTamamla);

function goreviTamamla(e){
    if(e.target.classList.contains('btn-tamamlandi')){
        console.log('check\'e tıklandı')
        e.target.parentElement.classList.toggle('gorev-tamamlandi')
    }else
    if(e.target.classList.contains('btn-sil')){
        console.log('trash\'a tıklanıldı')
        e.target.parentElement.remove();    }
    
}
