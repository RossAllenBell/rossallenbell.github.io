test("controller reset", function(){
    var controller = new TTTController();
    var view = controller.view;
    controller.setComputerPlayer(false);
    
    equal(controller.board.at(0,0), 0);
    equal($('#cell_0-0').text(), '');
    equal(controller.board.at(1,1), 0);
    equal($('#cell_1-1').text(), '');
    controller.tileClicked(0, 0);
    equal(controller.board.at(0,0), 1);
    equal($('#cell_0-0').text(), 'X');
    equal(controller.board.at(1,1), 0);
    equal($('#cell_1-1').text(), '');
    controller.resetClicked();
    equal(controller.board.at(0,0), 0);
    equal($('#cell_0-0').text(), '');
    equal(controller.board.at(1,1), 0);
    equal($('#cell_1-1').text(), '');
    
    view.destroy();
});
