$(document).ready(function(){



let srcValue = $('#imgHolder img').attr('src');




$('#colorSelector .colorItem').on('click', function(){

let imgPath;
imgPath = $(this).attr('data-img-path');

$('#imgHolder img').attr('src', imgPath);

});

$('.b').on('click', function(){

  let imgPaths=$(this).attr('data-img-paths');

  $('#imgHolder img').attr('src', imgPaths);
});









let modelSpecs,
    modelPrice,
    modelSpecsHolder,
    modelPriceHolder;

    modelSpecsHolder=$('#modelSpecs');
    modelPriceHolder=$('#modelPrice');

modelPrice=0;
modelSpecs='';

$('#autoForm input').on('change', function(){
calculatePrice();
compileSpecs();

});

calculatePrice();
compileSpecs();



function calculatePrice(){

let modelPriceEngine = $('input[name=engine]:checked', '#autoForm').val();
  modelPriceTransmition = $('input[name=transmition]:checked', '#autoForm').val();
 modelPricePackage = $('input[name=package]:checked', '#autoForm').val();


modelPriceEngine = parseInt(modelPriceEngine);
modelPriceTransmition = parseInt(modelPriceTransmition);
modelPricePackage = parseInt(modelPricePackage);

modelPrice = modelPriceEngine + modelPriceTransmition  + modelPricePackage;



 modelPriceHolder.text(prettify(modelPrice) + ' $ ');

};


function compileSpecs(){

modelSpecs = $('input[name=engine]:checked + label', '#autoForm').text();
modelSpecs = modelSpecs + '  ' + $('input[name=transmition]:checked + label', '#autoForm').text();
modelSpecs = modelSpecs + '  ' + $('input[name=package]:checked + label', '#autoForm').text() + '.';

modelSpecsHolder.text( modelSpecs );

}



function prettify(num) {
            var n = num.toString();
            return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
        }










});
