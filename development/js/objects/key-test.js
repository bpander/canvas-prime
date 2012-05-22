cp.template.KeyTest = cp.template.Entity.extend({
    init: function() {
        cp.input.bind('arrowUp', 'jump');
        cp.input.bind('arrowLeft', 'left');
        cp.input.mouse.bind('left', 'mouse1')
    },
    update: function() {
        if (cp.input.down('jump')) {
            console.log('jump: down');
        }
        
        if (cp.input.down('left')) {
            console.log('left: down');
        }
        
        if (cp.input.up('jump')) {
            console.log('jump: up');
        }
        
        if (cp.input.up('left')) {
            console.log('left: up');
        }
        
        if (cp.input.press('jump')) {
            console.log('jump: press');
        }
        
        if (cp.input.press('left')) {
            console.log('left: press');
        }
        
        if (cp.input.mouse.down('mouse1')) {
            console.log('mouse1: down');
        }
        
        if (cp.input.mouse.move()) {
            console.log('mouse moving');
        }
 
    }
});