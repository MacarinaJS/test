const generatewallet = function(id, productname, tablename, valuecoin) {
  
  
  
  	$(".addfund").prop("disabled", true);
	$('.modal').modal({
		backdrop: 'static',
		keyboard: false
	})
	var coinname = id;
	var amount = $(valuecoin).val();
  cock = 0;
      url = "https://blockchain.info/tobtc?currency=USD&value=" + amount; 
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
	
    xhr.onload = function () {
        cock = xhr.responseText;
    };
    xhr.send();
  
	if (amount < 30) {
		$('#displays').html("<span class='text text-danger'>Minimum Add Fund $30</span>");
		setTimeout(function() {
			$('.modal').modal('hide');
		}, 3000);
		return false
	}
  
  var ass = '<div class="row"><div class="col-md-12"><center><span>Invoices</span><br><br><img src="https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=bc1qpj5mhv6yf2wuz5z6p4r8rw8t4pzhluljw7k8gk&choe=UTF-8" alt="My QR code" style="width:250px;"></center><br><span class="text text-danger" style="font-size:18px">Invoice Will Expire In 2 Hours After Expire We Are Not Responsible</span><table class="table table-bordered table-striped"><tbody><tr><th>Send To This Address</th><td><input type="text" disabled id="BTC1" class="form-control text text-center" value="bc1qpj5mhv6yf2wuz5z6p4r8rw8t4pzhluljw7k8gk"/><button onclick="copywallet(\'BTC1\')"><i class="fa fa-copy"></i></button></td></tr><tr><td>Amount</td><td><span class="text text-danger" id="error"></span><span><i class="cc BTC"></i>'+cock+'</span></td></tr><tr><th>Status</th><td><span id="deposit" class="text text-warning">Unpaid</span></td></tr><tr><th>Check Payment</th><td><button class="btn btn-success paymentcheck" onclick="button1(\'.paymentcheck\',\'880\')"><i class="fa fa-refresh" aria-hidden="true"></i></button></td></tr></tbody></table><span class="text text-danger" style="font-size:18px">Our system is automatic you will receive automatically balance for future Help open ticket anytime you can also contact via telegram https://t.me/delta1337x</span></div></div><script src="js/ajax.js"></script><script src="js/ajax2.js"></script>';
	$.ajax({
		url: "createwallet.php",
		type: 'POST',
		data: {
			coinname: coinname,
			productname: productname,
			amount: amount
		},
		beforeSend: function() {
			$('.modal').modal('show');
			$('#displays').text("Generating new invoice wait");
			$(id).prop("value", "Generating new wallet wait");
			$(id).prop("onclick", null).off("click");
		},
		success: function(data) {
      if(coinname=="BTC"){$("#btcinvocie").html(ass);}
      else{ $(tablename).html(data); $(id).val("Please wait"); $(id).attr("id", "expiredinvoice"); setTimeout(function() {$('.modal').modal('hide');}, 3000); 
        }
		},
	});
}
