angular
  .module('stockApp')
  .controller('pagina3Controller', ["$scope",function(s) {
  	s.nombre="Hola mundo";
  	s.nuevoComentario = {};
  	s.comentarios = [
		{code:'CP0001', description:'IPhone 7', price:700, active:true, notes:'La esencia del iPhone a su máxima expresión', picture:'CP0001.png'},
    {code:'CP0002', description:'Samsung Galaxy S7 Edge', price:650, active:true, notes:'Equilibrio perfecto entre forma y funcionalidad', picture:'CP0002.png'},
        {code:'CP0003', description:'Microsoft 640 XL', price:350, active:true, notes:'Tu nuevo compañero de oficina móvil', picture:'CP0003.png'},
        {code:'PC0001', description:'Alien Ware', price:1900, active:true, notes:'Sistemas de alto rendimiento', picture:'PC0001.png'},
        {code:'PC0002', description:'Asus G501', price:1500, active:true, notes:'La elección de los campeones', picture:'PC0002.png'}
  	];
  	s.agregarProducto = function(){
  		s.comentarios.push(s.nuevoComentario);
  		s.nuevoComentario = {};
  	}
  }]);
