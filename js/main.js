var app = {

    initialize: function() {
    	var self = this;
    	this.store = new MemoryStore(function() {
        	$('body').html(new HomeView(self.store).render().el);
    	});
	
		this.registerEvents();
	},
	
	registerEvents: function() {
    	var self = this;
    	// Check of browser supports touch events...
    	if (document.documentElement.hasOwnProperty('ontouchstart')) {
        	// ... if yes: register touch event listener to change the "selected" state of the item
        	$('body').on('touchstart', 'a', function(event) {
            	$(event.target).addClass('tappable-active');
        	});
        	$('body').on('touchend', 'a', function(event) {
            	$(event.target).removeClass('tappable-active');
        	});
    	} else {
        	// ... if not: register mouse events instead
        	$('body').on('mousedown', 'a', function(event) {
            	$(event.target).addClass('tappable-active');
        	});
        	$('body').on('mouseup', 'a', function(event) {
            	$(event.target).removeClass('tappable-active');
        	});
    	}
	}

};

//invoke
app.initialize();