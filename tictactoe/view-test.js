test("view player number to symbol", function(){
    var controller = new TTTController();
    var view = controller.view;
    
    equal(view.playerNumberToSymbol(0), '');
    equal(view.playerNumberToSymbol(1), 'X');
    equal(view.playerNumberToSymbol(2), 'O');
    
    view.destroy();
});

test("view update", function(){
    var controller = new TTTController();
    var view = controller.view;

    equal($('#computerCheckbox').is(':checked'), true);
    $('#computerCheckbox').click();
    equal($('#cell_0-0').text(), '');
    equal($('#cell_1-1').text(), '');
    equal($('#statusSpan').text(), 'Current Player: X');
    equal($('#computerCheckbox').is(':checked'), false);
    $('#cell_1-1').click();
    equal($('#cell_0-0').text(), '');
    equal($('#cell_1-1').text(), 'X');
    equal($('#statusSpan').text(), 'Current Player: O');
    equal($('#computerCheckbox').is(':checked'), false);
    $('#resetButton').click();
    equal($('#cell_0-0').text(), '');
    equal($('#cell_1-0').text(), '');
    equal($('#statusSpan').text(), 'Current Player: X');
    equal($('#computerCheckbox').is(':checked'), false);
    $('#cell_0-0').click();
    $('#cell_1-0').click();
    $('#cell_2-0').click();
    $('#cell_0-1').click();
    $('#cell_2-1').click();
    $('#cell_1-1').click();
    $('#cell_0-2').click();
    $('#cell_2-2').click();
    $('#cell_1-2').click();
    equal($('#statusSpan').text(), 'Draw');
    
    view.destroy();
});
