var viewModelMenu = function () {
    var self = this;
    self.intl = ko.observableArray([]);
    self.itenActive = ko.observable('');
    self.itenList = ko.observableArray([]);

    self.initialize = function () {
        self.loadPage();
    };

    self.loadPage = function () {
        if (!document.getElementById("contentMenu")) {
            $("#menu").load("_js/view/menu.html", function () {
                var contentMenu = document.getElementById("contentMenu");
                app.initialize.viewModel(self, contentMenu);
                var arrayJsonItenList = ["resumo","interesses","formação","experiências", "cursos","competências","contato"];
                self.itenList(arrayJsonItenList);
            });
        }
    };
    
    self.redirectLinkToPage = function(event) {
      console.log(event);  
      app.initialize.redirect(event);
    };
};


