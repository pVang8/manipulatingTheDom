let image = document.getElementById("image");
let card = document.getElementById("card");
let nav = document.getElementById("nav");
let back = document.getElementById("back");
let mainButton = document.getElementById("mainButton");
let groupBtn = document.getElementById("groupBtn");
let textOne = document.getElementById("textOne");
let rotate = document.getElementById("rotate");
let pound = document.getElementById("pound");



let rollingInBtn = document.getElementById('rollingInBtn');
rollingInBtn.addEventListener('click', function(e){
    image.className = 'rollerRight';    
});

let shrinkBtn = document.getElementById('shrinkBtn');
shrinkBtn.addEventListener('click', function(e){
    card.className = 'zoomerOut';
});

let slideUpBtn = document.getElementById('slideUpBtn');
slideUpBtn.addEventListener('click', function(e){
    nav.className = 'slideUp';
});

let backBtn = document.getElementById('backBtn');
backBtn.addEventListener('click',function(e){
    back.className='turq'
})

let slideDownBtn = document.getElementById('slideDownBtn');
slideDownBtn.addEventListener('click', function(e){
    groupBtn.className= 'slideDown';
});

let pulseBtn = document.getElementById('pulseBtn');
pulseBtn.addEventListener('click', function(e){
    mainButton.className= 'pulse';
});

let thanosSnap = document.getElementById('thanosSnap');
thanosSnap.addEventListener('click',function(e){
    textOne.className='fadeOut';
});
let coolTable = document.getElementById('coolTable');
coolTable.addEventListener('click', function(e){
    rotate.className = 'rotateInLeft';
});

let poundGroup = document.getElementById('poundGroup');
poundGroup.addEventListener('click', function(e){
    pound.className = 'pound';
});

let spinner = document.getElementById('spinner');
spinner.addEventListener('click', function(e){
    carouselExampleInterval.className = 'spinner';
})



