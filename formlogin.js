Ext.onReady(function(){

Ext.QuickTips.init();
Ext.form.Field.prototype.msgTarget = 'side';
var cookies = new Ext.state.CookieProvider();
var formsimples = new Ext.FormPanel({
	id:'Formulario',
	labelWidth:100,
	method:'post',
	frame:true,
	title:'Autenticacao',
	bodyStyle:'padding:5px',
	witdh:340,
	defauts:{witdh:200,allowBlank:flase},
	defaltType:'textfield',
	renderTo:Ext.getBody(),
	items:[{
		fieldLabel:'Login',
		name:'User',
		id:'user'
	},{
		fieldLabel:'Senha',
		name:'pass',
		imputType:'pssword'
	}],
	buttons:[{
		text:'Entrat',
		handler:function(){
			if(formsimples.form.isValid())
			    formsimples.form.submit({
					waitTitle:'Por favor aguarde',
					waitMsg:'Processando...',
					url:'processalogin.php',
					sucess:function90{
						cookies.set("uer_valido",Ext.get('user').domvalue);
						window.location = 'meusistema.php';
					}
				}
		}
		
					failure:function(){
						Ext.MessageBox.alert('Tente novamente', 'Login ou senha invalido!');
					}
				});
		}
	}]
});
		