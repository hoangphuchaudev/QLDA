var misa_site="https://www.misa.vn";jQuery(document).ready(function($){if(window.location.href.indexOf(".local")>-1){misa_site="https://www.website.misa.local";}
checkMenuLazy=false;function loadMenuLazy(){if(!checkMenuLazy){if($(".header-top-custom").length>0){if(window.innerWidth>=980){if($(".cmi-content-item").length===0){var html=renderHTMLMenu.renderHTMLMenuAllProductForPC();$("#custom-menu-item").empty();$("#custom-menu-item").append(html);}
menuListProduct.menuAllProductForPC();}
else{menuListProduct.menuAllProductForMobile();}}
$("#collapseProduct").on("show.bs.collapse hide.bs.collapse",function(e){if(e.type=="show"){$("#collapseLink.collapse-link a").text("Thu gọn");$(this).show();}
else{$("#collapseLink.collapse-link a").text("Các sản phẩm khác >>");$(this).hide();}});$("#collapseProductQTNS").on("show.bs.collapse hide.bs.collapse",function(e){if(e.type=="show"){$("#collapseLinkQTNS.collapse-link a").text("Thu gọn");$(this).show();}
else{$("#collapseLinkQTNS.collapse-link a").text("Các sản phẩm khác >>");$(this).hide();}});$("#collapseProductQLDH").on("show.bs.collapse hide.bs.collapse",function(e){if(e.type=="show"){$("#collapseLinkQLDH.collapse-link a").text("Thu gọn");$(this).show();}
else{$("#collapseLinkQLDH.collapse-link a").text("Các sản phẩm khác >>");$(this).hide();}});$("#collapseProductMarketing").on("show.bs.collapse hide.bs.collapse",function(e){if(e.type=="show"){$("#collapseLinkMarketing.collapse-link a").text("Thu gọn");$(this).show();}
else{$("#collapseLinkMarketing.collapse-link a").text("Các sản phẩm khác >>");$(this).hide();}});checkMenuLazy=true;}};addListenerMulti(window,'scroll mousemove touchstart',loadMenuLazy);});function addListenerMulti(el,s,fn){s.split(' ').forEach(e=>el.addEventListener(e,fn,false));};window.onresize=function(a,b,c){if(window.innerWidth>=980){menuListProduct.menuAllProductForPC();}
else{menuListProduct.menuAllProductForMobile();}};var menuListProduct={menuAllProductForPC:function(){if(window.innerWidth>=980){var me=this;jQuery(".h-product-pc").unbind("click",".header").bind("click",".header",function(){var heightMenuProductPC=document.getElementById("custom-menu-item").clientHeight;if(heightMenuProductPC>0){jQuery("#custom-menu-item").css("max-height","0px");jQuery(".header-content-menu").removeClass("border-bottom");jQuery(".h-product-pc").removeClass("up");}
else{jQuery("#custom-menu-item").css("max-height","720px");jQuery(".header-content-menu").addClass("border-bottom");jQuery(".h-product-pc").addClass("up");}});me.mouseupClickMenuProductEvent();me.keyupEscMenuProductEvent();}},menuAllProductForMobile:function(){if(jQuery(".h-option-select-product").length===0){var html=renderHTMLMenu.renderHTMLMenuAllProductForMobile();jQuery(".h-product-mobile").append(html);}
jQuery(".h-option-select-product").on("change",function(){var value=jQuery(this).val();if(value!=undefined&&value!=""&&value!=null){window.location=value;}});},mouseupClickMenuProductEvent:function(){jQuery("body").mouseup(function(e){var heightMenuProductPC=document.getElementById("custom-menu-item").clientHeight;if(heightMenuProductPC>0){if(jQuery(".td-header-menu-wrap-full").has(e.target).length===0){jQuery("#custom-menu-item").css("max-height","0px");jQuery(".header-content-menu").removeClass("border-bottom");jQuery(".h-product-pc").removeClass("up");}}});},keyupEscMenuProductEvent:function(){jQuery(document).keyup(function(e){if(e.key==="Escape"){var heightMenuProductPC=document.getElementById("custom-menu-item").clientHeight;if(heightMenuProductPC>0){if(jQuery(".td-header-menu-wrap-full").has(e.target).length===0){jQuery("#custom-menu-item").css("max-height","0px");jQuery(".header-content-menu").removeClass("border-bottom");jQuery(".h-product-pc").removeClass("up");}}}});},};var renderHTMLMenu={renderHTMLMenuAllProductForPC:function(){menuAllProductCSS();var follow=''
if(jQuery('.is-misa').length==0){follow='rel="nofollow"';}
var html='<div class="menu-all-product">'+
'<ul class="map-tab-group">'+
"<li>"+
'<a href="#tab_administration" data-toggle="tab">Cơ quan Nhà nước</a>'+
"</li>"+
'<li class="active">'+
'<a href="#tab_enterprise" data-toggle="tab">Doanh nghiệp</a>'+
"</li>"+
"<li>"+
'<a href="#tab_personal" data-toggle="tab">Hộ kinh doanh và cá nhân</a>'+
"</li>"+
"</ul>"+
'<div class="tab-content">'+
'<div id="tab_administration" class="tab-pane fade">'+
'<div class="map-group-product" style="width:48%">'+
'<div class="map-group-product-name"><a href="https://fingov.misa.vn/" target="_blank" '+follow+'>Nền tảng Quản trị tài chính Nhà nước MISA FinGov</a></div>'+
'<div class="map-group-product-column" style="width:52%">'+
'<a href="https://bumas.misa.vn/" target="_blank" '+follow+'>'+
'<div class="map-product-item">'+
'<div class="map-product-logo bumas"></div>'+
'<div class="map-product-info">'+
'<div class="map-product-name">MISA Bumas</div>'+
'<div class="map-product-description">Quản lý ngân sách Nhà nước</div>'+
"</div>"+
"</div>"+
"</a>"+
'<a href="https://mimosa.misa.vn/" target="_blank" '+follow+'>'+
'<div class="map-product-item">'+
'<div class="map-product-logo mimosa"></div>'+
'<div class="map-product-info">'+
'<div class="map-product-name">MISA Mimosa 2022</div>'+
'<div class="map-product-description">Kế toán HCSN</div>'+
"</div>"+
"</div>"+
"</a>"+
'<a href="https://bamboo.misa.vn/" target="_blank" '+follow+'>'+
'<div class="map-product-item">'+
'<div class="map-product-logo bamboo"></div>'+
'<div class="map-product-info">'+
'<div class="map-product-name">MISA Bamboo.NET 2020</div>'+
'<div class="map-product-description">Kế toán xã/phường</div>'+
"</div>"+
"</div>"+
"</a>"+
'<a href="https://qlts.misa.vn/" target="_blank" '+follow+'>'+
'<div class="map-product-item">'+
'<div class="map-product-logo qlts"></div>'+
'<div class="map-product-info">'+
'<div class="map-product-name">MISA QLTS</div>'+
'<div class="map-product-description">Quản lý tài sản</div>'+
"</div>"+
"</div>"+
"</a>"+
'<a href="https://salagov.misa.vn/" target="_blank" '+follow+'>'+
'<div class="map-product-item">'+
'<div class="map-product-logo salagov"></div>'+
'<div class="map-product-info">'+
'<div class="map-product-name">MISA SalaGov</div>'+
'<div class="map-product-description">Quản lý tiền lương</div>'+
"</div>"+
"</div>"+
"</a>"+
"</div>"+
'<div class="map-group-product-column" style="width:48%">'+
'<a href="https://panda.misa.vn/" target="_blank" '+follow+'>'+
'<div class="map-product-item">'+
'<div class="map-product-logo panda"></div>'+
'<div class="map-product-info">'+
'<div class="map-product-name">MISA Panda.NET 2021</div>'+
'<div class="map-product-description">Kế toán thi hành án dân sự</div>'+
"</div>"+
"</div>"+
"</a>"+
'<a href="https://falcon.misa.vn/" target="_blank" '+follow+'>'+
'<div class="map-product-item">'+
'<div class="map-product-logo falcon"></div>'+
'<div class="map-product-info">'+
'<div class="map-product-name">MISA Falcon</div>'+
'<div class="map-product-description">Kế toán Quỹ "Vì người nghèo"</div>'+
"</div>"+
"</div>"+
"</a>"+
'<a href="https://lekima.misa.vn/" target="_blank" '+follow+'>'+
'<div class="map-product-item">'+
'<div class="map-product-logo lekima"></div>'+
'<div class="map-product-info">'+
'<div class="map-product-name">MISA Lekima</div>'+
'<div class="map-product-description">Quyết toán tài chính</div>'+
"</div>"+
"</div>"+
"</a>"+
"</div>"+
"</div>"+
'<div class="map-group-product" style="width:27%">'+
'<div class="map-group-product-name"><a href="https://emis.misa.vn/" target="_blank" '+follow+'>Nền tảng Giáo Dục MISA EMIS</a></div>'+
'<a href="https://emis.misa.vn/" target="_blank" '+follow+'>'+
'<div class="map-product-item">'+
'<div class="map-product-logo emis" style="opacity:0;"></div>'+
'<div class="map-product-info">'+
'<div class="map-sub-product">'+
'<a href="https://emis.misa.vn/tinh-nang/#tab2_item7" target="_blank" class="sub-product-link" '+follow+'>Quản lý Tuyển sinh</a>'+
'<a href="https://emis.misa.vn/tinh-nang/#tab1_item1" target="_blank" class="sub-product-link" '+follow+'>Quản lý học sinh</a>'+
'<a href="https://emis.misa.vn/tinh-nang/#tab2_item6" target="_blank" class="sub-product-link" '+follow+'>Quản lý Thời Khóa Biểu</a>'+
'<a href="https://emis.misa.vn/tinh-nang/#tab2_item8" target="_blank" class="sub-product-link" '+follow+'>Dạy học và Ôn tập trực tuyến</a>'+
'<a href="https://emis.misa.vn/tinh-nang/#tab1_item3" target="_blank" class="sub-product-link" '+follow+'>Quản lý thiết bị</a>'+
'<a href="https://emis.misa.vn/tinh-nang/#tab1_item2" target="_blank" class="sub-product-link" '+follow+'>Quản lý khoản thu</a>'+
'<a href="https://emis.misa.vn/tinh-nang/#tab1_item4" target="_blank" class="sub-product-link" '+follow+'>Quản lý Thư viện</a>'+
'<a href="https://emis.misa.vn/tinh-nang/#tab2_item2" target="_blank" class="sub-product-link" '+follow+'>Quán lý Giáo viên – CCVC</a>'+
"</div>"+
"</div>"+
"</div>"+
"</a>"+
'<a href="https://sisap.misa.vn/" target="_blank" '+follow+'>'+
'<div class="map-product-item">'+
'<div class="map-product-logo sisap"></div>'+
'<div class="map-product-info">'+
'<div class="map-product-name">MISA SISAP</div>'+
'<div class="map-product-description">Chia sẻ thông tin <span class="nowrap">Nhà trường – Phụ huynh</span></div>'+
"</div>"+
"</div>"+
"</a>"+
'<a href="https://jetpay.vn/jetpay-tuition/" target="_blank" '+follow+'>'+
'<div class="map-product-item">'+
'<div class="map-product-logo jetpay-tuition"></div>'+
'<div class="map-product-info">'+
'<div class="map-product-name">JetPay Tuition</div>'+
'<div class="map-product-description">Thu tiền học trực tuyến</div>'+
"</div>"+
"</div>"+
"</a>"+
"</div>"+
'<div class="map-group-product" style="width:25%;">'+
'<div class="map-group-product-name">Nền tảng quản lý CBCCVC</div>'+
'<a href="https://qlcb.misa.vn/" target="_blank" '+follow+'>'+
'<div class="map-product-item">'+
'<div class="map-product-logo qlcb"></div>'+
'<div class="map-product-info">'+
'<div class="map-product-name">MISA QLCB</div>'+
'<div class="map-product-description">Quản lý Cán bộ - Công chức, <span class="nowrap">Viên chức</span></div>'+
"</div>"+
"</div>"+
"</a>"+
'<a href="https://salagov.misa.vn/" target="_blank" '+follow+'>'+
'<div class="map-product-item">'+
'<div class="map-product-logo salagov"></div>'+
'<div class="map-product-info">'+
'<div class="map-product-name">MISA SalaGov</div>'+
'<div class="map-product-description">Quản lý tiền lương</div>'+
"</div>"+
"</div>"+
"</a>"+
"</div>"+
'<div class="map-group-product map-group-product-custom" style="width:25%;">'+
'<div class="map-group-product-name">Phần mềm điều hành</div>'+
'<a href="https://hotich.misa.vn/" target="_blank" '+follow+'>'+
'<div class="map-product-item">'+
'<div class="map-product-logo hotich"></div>'+
'<div class="map-product-info">'+
'<div class="map-product-name">MISA Hotich</div>'+
'<div class="map-product-description">Đăng ký và Quản lý hộ tịch</div>'+
"</div>"+
"</div>"+
"</a>"+
'<a href="https://taskgo.misa.vn/" target="_blank">'+
'<div class="map-product-item">'+
'<div class="map-product-logo taskgo"></div>'+
'<div class="map-product-info">'+
'<div class="map-product-name">MISA TaskGo</div>'+
'<div class="map-product-description">Quản lý công việc</div>'+
"</div>"+
"</div>"+
"</a>"+
'<a href="https://cegov.misa.vn/" target="_blank">'+
'<div class="map-product-item">'+
'<div class="map-product-logo cegov"></div>'+
'<div class="map-product-info">'+
'<div class="map-product-name">MISA CeGov</div>'+
'<div class="map-product-description">Quản lý Thi Đua Khen Thưởng</div>'+
"</div>"+
"</div>"+
"</a>"+
"</div>"+
"</div>"+
'<div id="tab_enterprise" class="tab-pane active fade in">'+
'<div class="enterprise-title"><a href="https://amis.misa.vn/" target="_blank" '+follow+'>Nền tảng quản trị doanh nghiệp hợp nhất MISA AMIS</a></div>'+
'<div class="map-group-product" style="width:25%">'+
'<div class="map-group-product-name"><a href="https://amis.misa.vn/amis-ke-toan" target="_blank" '+follow+'>Tài chính – kế toán</a></div>'+
'<div class="map-group-product-column" style="width:100%">'+
'<a href="https://amis.misa.vn/amis-ke-toan/" target="_blank" '+follow+'>'+
'<div class="map-product-item">'+
'<div class="map-product-logo amis-ke-toan"></div>'+
'<div class="map-product-info">'+
'<div class="map-product-name">AMIS Kế toán</div>'+
'<div class="map-product-description">Phần mềm kế toán online</div>'+
"</div>"+
"</div>"+
"</a>"+
'<a href="https://sme.misa.vn/" target="_blank" '+follow+'>'+
'<div class="map-product-item">'+
'<div class="map-product-logo sme"></div>'+
'<div class="map-product-info">'+
'<div class="map-product-name">MISA SME 2022</div>'+
'<div class="map-product-description">Quản lý kế toán (offline)</div>'+
"</div>"+
"</div>"+
"</a>"+
'<a href="https://www.meinvoice.vn/" target="_blank" '+follow+'>'+
'<div class="map-product-item">'+
'<div class="map-product-logo meinvoice"></div>'+
'<div class="map-product-info">'+
'<div class="map-product-name">MISA meInvoice</div>'+
'<div class="map-product-description">Hóa đơn điện tử</div>'+
"</div>"+
"</div>"+
"</a>"+
'<a href="https://esign.misa.vn/" target="_blank" '+follow+'>'+
'<div class="map-product-item">'+
'<div class="map-product-logo esign"></div>'+
'<div class="map-product-info">'+
'<div class="map-product-name">MISA eSign</div>'+
'<div class="map-product-description">Dịch vụ chữ ký số</div>'+
"</div>"+
"</div>"+
"</a>"+
"</div>"+
"<div>"+
'<div class="map-group-product-column" id="collapseProduct" class="collapse" style="width:100%;display:none">'+
'<a href="https://mtax.misa.vn/" target="_blank" '+follow+'>'+
'<div class="map-product-item">'+
'<div class="map-product-logo mtax"></div>'+
'<div class="map-product-info">'+
'<div class="map-product-name">MISA mTax</div>'+
'<div class="map-product-description">Kê khai, nộp tờ khai thuế</div>'+
"</div>"+
"</div>"+
"</a>"+
'<a href="https://bankhub.misa.vn/" target="_blank" '+follow+'>'+
'<div class="map-product-item">'+
'<div class="map-product-logo bankhub"></div>'+
'<div class="map-product-info">'+
'<div class="map-product-name">MISA BankHub</div>'+
'<div class="map-product-description">Ngân hàng điện tử</div>'+
"</div>"+
"</div>"+
"</a>"+
'<a href="https://asp.misa.vn/" target="_blank" '+follow+'>'+
'<div class="map-product-item">'+
'<div class="map-product-logo asp"></div>'+
'<div class="map-product-info">'+
'<div class="map-product-name">MISA ASP</div>'+
'<div class="map-product-description">Kế toán dịch vụ</div>'+
"</div>"+
"</div>"+
"</a>"+
'<a href="https://lending.misa.vn/" target="_blank" '+follow+'>'+
'<div class="map-product-item">'+
'<div class="map-product-logo lending"></div>'+
'<div class="map-product-info">'+
'<div class="map-product-name">MISA Lending</div>'+
'<div class="map-product-description">Kết nối vay vốn doanh nghiệp</div>'+
"</div>"+
"</div>"+
"</a>"+
"</div>"+
'<div id="collapseLink" class="collapse-link"><a class="map-product-item" data-toggle="collapse" data-target="#collapseProduct">Các sản phẩm khác >></a></div>'+
"</div>"+
"</div>"+
'<div class="map-group-product" style="width:25%">'+
'<div class="map-group-product-name"><a href="https://amis.misa.vn/marketing-ban-hang/" target="_blank" '+follow+'>Marketing - bán hàng</a></div>'+
'<a href="https://amis.misa.vn/amis-aimarketing/" target="_blank" '+follow+'>'+
'<div class="map-product-item">'+
'<div class="map-product-logo amis-aimarketing"></div>'+
'<div class="map-product-info">'+
'<div class="map-product-name">AMIS aiMarketing</div>'+
'<div class="map-product-description">Công cụ Automation Marketing</div>'+
"</div>"+
"</div>"+
"</a>"+
'<a href="https://amis.misa.vn/phan-mem-crm-amis/" target="_blank" '+follow+'>'+
'<div class="map-product-item">'+
'<div class="map-product-logo amis-crm"></div>'+
'<div class="map-product-info">'+
'<div class="map-product-name">AMIS CRM</div>'+
'<div class="map-product-description">Quản lý bán hàng</div>'+
"</div>"+
"</div>"+
"</a>"+
"</a>"+
'<a href="https://amis.misa.vn/amis-khuyen-mai/" target="_blank" '+follow+'>'+
'<div class="map-product-item">'+
'<div class="map-product-logo amis-khuyen-mai"></div>'+
'<div class="map-product-info">'+
'<div class="map-product-name">AMIS Khuyến mại</div>'+
'<div class="map-product-description">Quản lý khuyến mại</div>'+
"</div>"+
"</div>"+
"</a>"+
'<a href="https://eshop.misa.vn/" target="_blank" '+follow+'>'+
'<div class="map-product-item">'+
'<div class="map-product-logo eshop"></div>'+
'<div class="map-product-info">'+
'<div class="map-product-name">MISA eShop</div>'+
'<div class="map-product-description">Quản lý cửa hàng</div>'+
"</div>"+
"</div>"+
"</a>"+
"<div>"+
'<div class="map-group-product-column" id="collapseProductMarketing" class="collapse" style="width:100%;display:none">'+
'<a href="https://www.cukcuk.vn/" target="_blank" '+follow+'>'+
'<div class="map-product-item">'+
'<div class="map-product-logo cukcuk"></div>'+
'<div class="map-product-info">'+
'<div class="map-product-name">MISA Cukcuk</div>'+
'<div class="map-product-description">Quản lý nhà hàng</div>'+
"</div>"+
"</div>"+
"</a>"+
'<a href="https://jetpay.vn/jetpay-payment/" target="_blank" '+follow+'>'+
'<div class="map-product-item">'+
'<div class="map-product-logo jetpay-payment"></div>'+
'<div class="map-product-info">'+
'<div class="map-product-name">JetPay Payment</div>'+
'<div class="map-product-description">Cổng thanh toán</div>'+
"</div>"+
"</div>"+
"</a>"+
"</div>"+
'<div id="collapseLinkMarketing" class="collapse-link"><a class="map-product-item" data-toggle="collapse" data-target="#collapseProductMarketing">Các sản phẩm khác >></a></div>'+
"</div>"+
"</div>"+
'<div class="map-group-product" style="width:25%">'+
'<div class="map-group-product-name"><a href="https://amis.misa.vn/amis-nhan-su/" target="_blank" '+follow+'>Quản trị nguồn nhân lực</a></div>'+
'<a href="https://amis.misa.vn/amis-tuyen-dung/" target="_blank" '+follow+'>'+
'<div class="map-product-item">'+
'<div class="map-product-logo amis-tuyen-dung"></div>'+
'<div class="map-product-info">'+
'<div class="map-product-name">AMIS Tuyển dụng</div>'+
'<div class="map-product-description">Quản lý tuyển dụng</div>'+
"</div>"+
"</div>"+
"</a>"+
'<a href="https://amis.misa.vn/thong-tin-nhan-su/" '+follow+'>'+
'<div class="map-product-item">'+
'<div class="map-product-logo amis-thong-tin-nhan-su"></div>'+
'<div class="map-product-info">'+
'<div class="map-product-name">AMIS Thông tin nhân sự</div>'+
'<div class="map-product-description">Hệ thống thông tin nhân sự</div>'+
"</div>"+
"</div>"+
"</a>"+
'<a href="https://amis.misa.vn/phan-mmem-cham-cong/" target="_blank" '+follow+'>'+
'<div class="map-product-item">'+
'<div class="map-product-logo amis-cham-cong"></div>'+
'<div class="map-product-info">'+
'<div class="map-product-name">AMIS Chấm công</div>'+
'<div class="map-product-description">Quản lý chấm công</div>'+
"</div>"+
"</div>"+
"</a>"+
'<a href="https://amis.misa.vn/tien-luong/" target="_blank" '+follow+'>'+
'<div class="map-product-item">'+
'<div class="map-product-logo amis-tien-luong"></div>'+
'<div class="map-product-info">'+
'<div class="map-product-name">AMIS Tiền lương</div>'+
'<div class="map-product-description">Quản lý tiền lương</div>'+
"</div>"+
"</div>"+
"</a>"+
"<div>"+
'<div class="map-group-product-column" id="collapseProductQTNS" class="collapse" style="width:100%;display:none">'+
"<a>"+
'<div class="map-product-item">'+
'<div class="map-product-logo amis-nhan-vien"></div>'+
'<div class="map-product-info">'+
'<div class="map-product-name">AMIS Nhân viên</div>'+
'<div class="map-product-description">Thủ tục dành cho nhân viên</div>'+
"</div>"+
"</div>"+
"</a>"+
'<a href="https://amis.misa.vn/phan-mem-bao-hiem-xa-hoi/" target="_blank" '+follow+'>'+
'<div class="map-product-item">'+
'<div class="map-product-logo amis-bhxh"></div>'+
'<div class="map-product-info">'+
'<div class="map-product-name">AMIS BHXH</div>'+
'<div class="map-product-description">Bảo hiểm xã hội điện tử</div>'+
"</div>"+
"</div>"+
"</a>"+
'<a href="https://amis.misa.vn/amis-thue-tncn/" target="_blank" '+follow+'>'+
'<div class="map-product-item">'+
'<div class="map-product-logo amis-thue-tncn"></div>'+
'<div class="map-product-info">'+
'<div class="map-product-name">AMIS Thuế TNCN</div>'+
'<div class="map-product-description">Phần mềm kê khai Thuế TNCN</div>'+
"</div>"+
"</div>"+
"</a>"+
"</div>"+
'<div id="collapseLinkQTNS" class="collapse-link"><a class="map-product-item" data-toggle="collapse" data-target="#collapseProductQTNS">Các sản phẩm khác >></a></div>'+
"</div>"+
"</div>"+
'<div class="map-group-product" style="width:25%">'+
'<div class="map-group-product-name"><a href="https://amis.misa.vn/quan-ly-dieu-hanh/" target="_blank" '+follow+'>Quản lý - điều hành</a></div>'+
'<a href="https://amis.misa.vn/amis-cong-viec/" target="_blank" '+follow+'>'+
'<div class="map-product-item">'+
'<div class="map-product-logo amis-cong-viec"></div>'+
'<div class="map-product-info">'+
'<div class="map-product-name">AMIS Công việc</div>'+
'<div class="map-product-description">Quản lý công việc</div>'+
"</div>"+
"</div>"+
"</a>"+
'<a href="https://amis.misa.vn/amis-ghi-chep/" target="_blank" '+follow+'>'+
'<div class="map-product-item">'+
'<div class="map-product-logo amis-ghi-chep"></div>'+
'<div class="map-product-info">'+
'<div class="map-product-name">AMIS Ghi chép</div>'+
'<div class="map-product-description">Ghi chép & lưu trữ tài liệu</div>'+
"</div>"+
"</div>"+
"</a>"+
'<a href="https://amis.misa.vn/amis-wesign/" target="_blank" '+follow+'>'+
'<div class="map-product-item">'+
'<div class="map-product-logo amis-wesign"></div>'+
'<div class="map-product-info">'+
'<div class="map-product-name">AMIS WeSign</div>'+
'<div class="map-product-description">Ký tài liệu số</div>'+
"</div>"+
"</div>"+
"</a>"+
'<a href="https://amis.misa.vn/amis-mang-xa-hoi-doanh-nghiep/" target="_blank" '+follow+'>'+
'<div class="map-product-item">'+
'<div class="map-product-logo amis-mang-xa-hoi"></div>'+
'<div class="map-product-info">'+
'<div class="map-product-name">AMIS Mạng xã hội</div>'+
'<div class="map-product-description">Mạng xã hội doanh nghiệp</div>'+
"</div>"+
"</div>"+
"</a>"+
"<div>"+
'<div class="map-group-product-column" id="collapseProductQLDH" class="collapse" style="width:100%;display:none">'+
'<a href="https://amis.misa.vn/amis-tai-san/" target="_blank" '+follow+'>'+
'<div class="map-product-item">'+
'<div class="map-product-logo amis-tai-san"></div>'+
'<div class="map-product-info">'+
'<div class="map-product-name">AMIS Tài sản</div>'+
'<div class="map-product-description">Quản lý tài sản</div>'+
"</div>"+
"</div>"+
"</a>"+
'<a href="https://amis.misa.vn/amis-phong-hop/" target="_blank" '+follow+'>'+
'<div class="map-product-item">'+
'<div class="map-product-logo amis-phong-hop"></div>'+
'<div class="map-product-info">'+
'<div class="map-product-name">AMIS Phòng họp</div>'+
'<div class="map-product-description">Quản lý phòng họp</div>'+
"</div>"+
"</div>"+
"</a>"+
"</div>"+
'<div id="collapseLinkQLDH" class="collapse-link"><a class="map-product-item" data-toggle="collapse" data-target="#collapseProductQLDH">Các sản phẩm khác >></a></div>'+
"</div>"+
"</div>"+
"</div>"+
'<div id="tab_personal" class="tab-pane fade">'+
'<div class="map-group-product">'+
'<div class="map-group-product-name">Quản lý nhà hàng</div>'+
'<a href="https://www.cukcuk.vn/" target="_blank" '+follow+'>'+
'<div class="map-product-item">'+
'<div class="map-product-logo cukcuk"></div>'+
'<div class="map-product-info">'+
'<div class="map-product-name">MISA Cukcuk</div>'+
'<div class="map-product-description">Quản lý nhà hàng</div>'+
"</div>"+
"</div>"+
"</a>"+
'<a href="https://www.cukcuk.vn/misa-lomas/" target="_blank" '+follow+'>'+
'<div class="map-product-item">'+
'<div class="map-product-logo misa-lomas"></div>'+
'<div class="map-product-info">'+
'<div class="map-product-name">MISA Lomas</div>'+
'<div class="map-product-description">Nghiệp vụ chăm sóc khách hàng</div>'+
"</div>"+
"</div>"+
"</a>"+
'<a href="https://www.cukcuk.vn/ban-hang-online/" target="_blank" '+follow+'>'+
'<div class="map-product-item">'+
'<div class="map-product-logo banhang-online"></div>'+
'<div class="map-product-info">'+
'<div class="map-product-name">Bán hàng Online</div>'+
'<div class="map-product-description">Xây dựng Website bán hàng chuyên nghiệp</div>'+
"</div>"+
"</div>"+
"</a>"+
'<a href="https://www.cukcuk.vn/dang-ky-grabfood-cung-cukcuk/" target="_blank" '+follow+'>'+
'<div class="map-product-item">'+
'<div class="map-product-logo grabfood"></div>'+
'<div class="map-product-info">'+
'<div class="map-product-name">Kết nối GrabFood</div>'+
'<div class="map-product-description">Kết nối và đồng bộ đơn hàng từ GrabFood</div>'+
"</div>"+
"</div>"+
"</a>"+
"</a>"+
'<a href="https://jetpay.vn/jetpay-payment/" target="_blank">'+
'<div class="map-product-item">'+
'<div class="map-product-logo jetpay-payment"></div>'+
'<div class="map-product-info">'+
'<div class="map-product-name">JetPay Payment</div>'+
'<div class="map-product-description">Cổng thanh toán</div>'+
"</div>"+
"</div>"+
"</a>"+
"</div>"+
'<div class="map-group-product" style="width:22%">'+
'<div class="map-group-product-name">Quản lý cửa hàng</div>'+
'<a href="https://eshop.misa.vn/" target="_blank" '+follow+'>'+
'<div class="map-product-item">'+
'<div class="map-product-logo eshop"></div>'+
'<div class="map-product-info">'+
'<div class="map-product-name">MISA eShop</div>'+
'<div class="map-product-description">Quản lý cửa hàng</div>'+
"</div>"+
"</div>"+
"</a>"+
'<a href="https://eshop.misa.vn/san-pham-ocm/" target="_blank" '+follow+'>'+
'<div class="map-product-item">'+
'<div class="map-product-logo ocm"></div>'+
'<div class="map-product-info">'+
'<div class="map-product-name">MISA OCM</div>'+
'<div class="map-product-description">Nghiệp vụ Bán hàng online</div>'+
"</div>"+
"</div>"+
"</a>"+
'<a href="https://eshop.misa.vn/misa-lomas/" target="_blank" '+follow+'>'+
'<div class="map-product-item">'+
'<div class="map-product-logo misa-lomas"></div>'+
'<div class="map-product-info">'+
'<div class="map-product-name">MISA Lomas</div>'+
'<div class="map-product-description">Nghiệp vụ chăm sóc khách hàng</div>'+
"</div>"+
"</div>"+
"</a>"+
'<a href="https://jetpay.vn/jetpay-payment/" target="_blank">'+
'<div class="map-product-item">'+
'<div class="map-product-logo jetpay-payment"></div>'+
'<div class="map-product-info">'+
'<div class="map-product-name">JetPay Payment</div>'+
'<div class="map-product-description">Cổng thanh toán</div>'+
"</div>"+
"</div>"+
"</a>"+
"</div>"+
'<div class="map-group-product" style="width:28%">'+
'<div class="map-group-product-name">Quản lý tài chính cá nhân</div>'+
'<a href="https://moneykeeper.misa.vn/" target="_blank" '+follow+'>'+
'<div class="map-product-item">'+
'<div class="map-product-logo moneykeeper"></div>'+
'<div class="map-product-info">'+
'<div class="map-product-name">MISA MoneyKeeper</div>'+
'<div class="map-product-description">Quản lý tài chính cá nhân</div>'+
"</div>"+
"</div>"+
"</a>"+
"</div>"+
'<div class="map-group-product">'+
'<div class="map-group-product-name">Nền tảng cho Golfer</div>'+
'<a href="https://golf.misa.vn/" target="_blank" '+follow+'>'+
'<div class="map-product-item">'+
'<div class="map-product-logo golf"></div>'+
'<div class="map-product-info">'+
'<div class="map-product-name">MISA Golf</div>'+
'<div class="map-product-description">Nền tảng cho Golfer</div>'+
"</div>"+
"</div>"+
"</a>"+
"</div>"+
"</div>"+
"</div>";return html;},renderHTMLMenuAllProductForMobile:function(){var follow=''
if(jQuery('.is-misa').length==0){follow='rel="nofollow"';}
var html="";html=html.concat('<select class="h-option-select h-option-select-product">'+
'<option value="" selected disabled hidden>Tất cả sản phẩm MISA</option>'+
'<optgroup label="Cơ quan Nhà nước">'+
'<option value="https://bumas.misa.vn/" '+follow+'>MISA Bumas - Quản lý ngân sách</option>'+
'<option value="https://mimosa.misa.vn/" '+follow+'>MISA Mimosa 2022 - Kế toán HCSN</option>'+
'<option value="https://bamboo.misa.vn/" '+follow+'>MISA Bamboo.NET 2020 - Kế toán xã/phường</option>'+
'<option value="https://qlts.misa.vn/" '+follow+'>MISA QLTS - Quản lý tài sản</option>'+
'<option value="https://salagov.misa.vn/" '+follow+'>MISA SalaGov - Quản lý tiền lương</option>'+
'<option value="https://panda.misa.vn/" '+follow+'>MISA Panda.NET 2021 - Kế toán Thi hành án dân sự </option>'+
'<option value="https://falcon.misa.vn/" '+follow+'>MISA Falcon - Kế toán Quỹ "Vì người nghèo"</option>'+
'<option value="https://lekima.misa.vn/" '+follow+'>MISA Lekima - Quyết toán tài chính</option>'+
'<option value="https://emis.misa.vn/" '+follow+'>MISA EMIS - Quản lý trường học</option>'+
'<option value="https://sisap.misa.vn/" '+follow+'>MISA SISAP - Chia sẻ thông tin Nhà trường – Phụ huynh</option>'+
'<option value="https://jetpay.vn/jetpay-tuition/" '+follow+'>JetPay Tuition - Thu tiền học trực tuyến</option>'+
'<option value="https://qlcb.misa.vn/" '+follow+'>MISA QLCB - Quản lý Cán bộ - Công chức, Viên chức</option>'+
'<option value="https://hotich.misa.vn/" '+follow+'>MISA Hotich - Đăng ký và Quản lý hộ tịch</option>'+
'<option value="http://eoffice.misa.vn/taskgo/">MISA TaskGo - Quản lý công việc</option>'+
'<option value="http://eoffice.misa.vn/cegov/">MISA CeGov - Quản lý Thi Đua Khen Thưởng</option>'+
"</optgroup>"+
'<optgroup label="Doanh nghiệp">'+
'<option value="https://sme.misa.vn/" '+follow+'>MISA SME 2022 - Quản lý kế toán (offline)</option>'+
'<option value="https://amis.misa.vn/amis-ke-toan/" '+follow+'>AMIS Kế toán</option>'+
'<option value="https://www.meinvoice.vn/" '+follow+'>MISA meInvoice - Hóa đơn điện tử</option>'+
'<option value="https://asp.misa.vn/" '+follow+'>MISA ASP - Kế toán dịch vụ</option>'+
'<option value="https://lending.misa.vn/" '+follow+'>MISA Lending - Kết nối vay vốn doanh nghiệp</option>'+
'<option value="https://mtax.misa.vn/" '+follow+'>MISA mTax - Kê khai, nộp tờ khai thuế</option>'+
'<option value="https://esign.misa.vn/" '+follow+'>MISA eSign - Chữ ký số điện tử</option>'+
'<option value="https://bankhub.misa.vn/" '+follow+'>MISA BankHub - Ngân hàng điện tử</option>'+
'<option value="https://amis.misa.vn/phan-mem-crm-amis/" '+follow+'>AMIS Bán hàng - Quản lý bán hàng</option>'+
'<option value="https://amis.misa.vn/amis-khuyen-mai/" '+follow+'>AMIS Khuyến mại - Quản lý khuyến mại</option>'+
'<option value="https://jetpay.vn/jetpay-payment/" '+follow+'>JetPay Payment - Cổng thanh toán</option>'+
'<option value="https://amis.misa.vn/amis-aimarketing/" '+follow+'>AMIS aiMarketing - Công cụ Automation Marketing</option>'+
'<option value="https://amis.misa.vn/amis-tuyen-dung/" '+follow+'>AMIS Tuyển dụng - Quản lý tuyển dụng</option>'+
'<option value="https://amis.misa.vn/thong-tin-nhan-su/" '+follow+'>AMIS Thông tin nhân sự - Hệ thống thông tin nhân sự</option>'+
'<option value="https://amis.misa.vn/phan-mem-cham-cong/" '+follow+'>AMIS Chấm công - Quản lý chấm công</option>'+
'<option value="https://amis.misa.vn/tien-luong/" '+follow+'>AMIS Tiền lương - Tính toán và quản lý tiền lương</option>'+
'<option value="">AMIS Nhân viên - Coming soon 2021</option>'+
'<option value="https://amis.misa.vn/phan-mem-bao-hiem-xa-hoi/" '+follow+'>AMIS BHXH - Bảo hiểm xã hội điện tử</option>'+
'<option value="https://amis.misa.vn/amis-cong-viec/" '+follow+'>AMIS Công việc - Quản lý công việc</option>'+
'<option value="https://amis.misa.vn/amis-ghi-chep/" '+follow+'>AMIS Ghi chép - Ghi chép & lưu trữ tài liệu</option>'+
'<option value="https://amis.misa.vn/amis-wesign/" '+follow+'>AMIS WeSign - Ký tài liệu số</option>'+
'<option value="https://amis.misa.vn/amis-mang-xa-hoi-doanh-nghiep/" '+follow+'>AMIS Mạng xã hội - Mạng xã hội doanh nghiệp</option>'+
'<option value="https://amis.misa.vn/amis-tai-san/" '+follow+'>AMIS tài sản - Quản lý tài sản</option>'+
'<option value="https://amis.misa.vn/amis-phong-hop/" '+follow+'>AMIS Phòng họp - Quản lý phòng họp</option>'+
'<option value="https://amis.misa.vn/amis-nhan-su/" '+follow+'>AMIS Nhân sự - Quản lý nhân sự</option>'+
"</optgroup>"+
'<optgroup label="Giải pháp bán lẻ">'+
'<option value="https://www.cukcuk.vn/" '+follow+'>MISA Cukcuk - Quản lý nhà hàng</option>'+
'<option value="https://www.cukcuk.vn/misa-lomas/" '+follow+'>MISA Lomas - Nghiệp vụ chăm sóc khách hàng</option>'+
'<option value="https://www.cukcuk.vn/ban-hang-online/" '+follow+'>Bán hàng Online - Xây dựng Website bán hàng chuyên nghiệp</option>'+
'<option value="https://www.cukcuk.vn/dang-ky-grabfood-cung-cukcuk/" '+follow+'>Kết nối GrabFood - Kết nối và đồng bộ đơn hàng từ GrabFood</option>'+
'<option value="https://eshop.misa.vn/" '+follow+'>MISA eShop - Quản lý cửa hàng</option>'+
'<option value="https://eshop.misa.vn/san-pham-ocm/" '+follow+'>MISA OCM - Nghiệp vụ Bán hàng online</option>'+
'<option value="https://eshop.misa.vn/misa-lomas/" '+follow+'>MISA Lomas - Nghiệp vụ chăm sóc khách hàng</option>'+
'<option value="https://moneykeeper.misa.vn/" '+follow+'>MISA MoneyKeeper - Quản lý tài chính cá nhân</option>'+
'<option value="https://golf.misa.vn/" '+follow+'>MISA Golf - Nền tảng cho Golfer</option>'+
"/optgroup>"+
"</select>");return html;},};function menuAllProductCSS(){if(!document.getElementById("css")){var head=document.getElementsByTagName("head")[0];var link=document.createElement("link");link.id="css";link.rel="stylesheet";link.type="text/css";link.href=misa_site+"/sites/menu/menu-all-product.css?ver=8";link.media="all";head.appendChild(link);}};var prevScrollpos=window.pageYOffset;window.onscroll=function(){if(jQuery(".header-top-custom").length>0){if(window.innerWidth>=980){if(!jQuery(".header-top-custom").is(":hover")){if(!jQuery(".td-header-menu-wrap").is(":hover")){var currentScrollPos=window.pageYOffset;var heightMenu=jQuery(".header-top-custom")[0].clientHeight;if(prevScrollpos>currentScrollPos){document.getElementsByClassName("td-header-menu-wrap-full")[0].style.top="0";}
else{if(currentScrollPos>heightMenu){var heightMenuProductPC=document.getElementById("custom-menu-item").clientHeight;if(heightMenuProductPC<=0){document.getElementsByClassName("td-header-menu-wrap-full")[0].style.top="-"+(heightMenu+1)+"px";}}}
prevScrollpos=currentScrollPos;}}}else{var currentScrollPos=window.pageYOffset;var heightMenu=jQuery(".header-top-custom")[0].clientHeight;if(prevScrollpos>currentScrollPos){document.getElementsByClassName("td-header-menu-wrap-full")[0].style.top="0";}
else{if(currentScrollPos>heightMenu){document.getElementsByClassName("td-header-menu-wrap-full")[0].style.top="-"+(heightMenu+1)+"px";}}
prevScrollpos=currentScrollPos;}}};