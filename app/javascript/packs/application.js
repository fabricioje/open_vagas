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

$(document).ready(function(){
  $('#current').text($('.count-textarea').val().length);
  $('.count-textarea').keyup(function(){
    var characterCount = $(this).val().length;
    $('#current').text(characterCount)
  })
})