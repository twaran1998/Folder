

$(document).ready( () => {
    const params = new URLSearchParams(window.location.search)

    $('#testType option[value='+params.get('testType')+']').attr('selected', 'selected');
    $('#result option[value='+params.get('result')+']').attr('selected', 'selected');

})