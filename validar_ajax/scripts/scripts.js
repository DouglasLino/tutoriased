//
$(function(){
	$("form[name='frmCollectWeights']").validate({
		rules:{
			empName:{
				required:true,
				minlength:3
			},
			empWeight:{
				required:true,
				digits:true
			}
		},
		messages:{
			empName:{
				required:"Name is required",
				minlength:"Name too short"
			},
			empWeight:{
				required:"Weight is required",
				digits:"Weight must be a number"
			}
		},
		submitHandler:{
			function(form){
				form.submit();
			}
		}
	});
});

