window.onload = mainProd

var app = new function() {
    this.el = document.getElementById('prod');
    this.prod = [];
    this.Count = function(data) {
        var el   = document.getElementById('productoCargar');
    };

        this.FetchAll = function() {
        var data = '';

            if (this.prod.length > 0) {
            for (i = 0; i < this.prod.length; i++) {
            data += '<tr>';
            data += '<td>' + this.prod[i] + '</td>';
            data += '<td><button onclick="app.Edit(' + i + ')">Editar</button></td>';
            data += '<td><button onclick="app.Delete(' + i + ')">Eliminar</button></td>';
            data += '</tr>';
            }

            JSON.parse(localStorage.getItem('produtosLocalS'));
            localStorage.setItem('produtosLocalS',JSON.stringify(data));
    
        }

        this.Count(this.prod.length);
        return this.el.innerHTML = data;
        };
        this.Add = function () {
        el = document.getElementById('add-prod');
        
        var prodCarg = el.value;
        if (prodCarg) {
            this.prod.push(prodCarg.trim());
            el.value = '';
                this.FetchAll();
            }
        };
        this.Edit = function (item) {
        var el = document.getElementById('edit-prod');
        
        el.value = this.prod[item];
        
        document.getElementById('alim').style.display = 'block';
            self = this;
        document.getElementById('guardarEdit').onsubmit = function() {
            var prodCarg = el.value;
            if (prodCarg) {
            self.prod.splice(item, 1, prodCarg.trim());
            console.log(app.Edit)
            self.FetchAll();
            CloseInput();
            }
        }
        };
        this.Delete = function (item) {
            this.prod.splice(item, 1);
            this.FetchAll();
            localStorage.clear();
            localStorage.setItem('produtosLocalS',JSON.stringify(data));
        };

        
    }
        app.FetchAll();
        function CloseInput() {
            document.getElementById('alim').style.display = 'none';
        }