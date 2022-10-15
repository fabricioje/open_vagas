// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

import 'bootstrap'
import './src/application.scss'

// Importando sweetalert2, para deixar os alerts mais agradáveis
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
window.Swal = Swal

Rails.start()
Turbolinks.start()
ActiveStorage.start()


$(function () {
    'use strict'

    $('[data-toggle="offcanvas"]').on('click', function () {
        $('.offcanvas-collapse').toggleClass('open')
    })
})

require("trix")
require("@rails/actiontext")

// TODO => VERIFICAR POR QUE ESSE BLOCO NAO ESTA FUNCIONANDO
$(document).ready(function(){
  if ($('.count-textarea').length > 0){
    $('#current').text($('.count-textarea').val().length);
    $('.count-textarea').keyup(function(){
      var characterCount = $(this).val().length;
      $('#current').text(characterCount)
    })
  }

  $('.copy-url').click(function(e){
    e.preventDefault();
    var url = $(this).attr('data-clipboard-text');
    navigator.clipboard.writeText(url);
    alert('URL copiada com sucesso.')
  })
});

