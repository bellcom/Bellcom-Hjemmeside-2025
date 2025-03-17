/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

  'use strict';  
  
  //////////////// CKEditor settings
  Drupal.behaviors.thesaasCkeditor = {
    attach: function (context, settings) {
      // Alter CKEditor config to allow empty tags
      if (typeof CKEDITOR !== "undefined") {
        CKEDITOR.dtd.$removeEmpty['i'] = false;
        CKEDITOR.dtd.$removeEmpty['span'] = false;
        console.log('Ckeditor log', CKEDITOR.dtd);
      }
    }
  };

  //////////////// Move form labels to placeholders
  Drupal.behaviors.thesaasForms = {
    attach: function (context, settings) {   
      $("form.user-form :input, form.user-login-form :input, form.user-pass :input, .block-simplenews form :input, .search-form :input, form.contact-form :input").each(function(index, elem) {
        var eId = $(elem).attr("id");
        var label = null;
        if (eId && (label = $(elem).parents("form").find("label[for="+eId+"]")).length == 1) {
            $(elem).attr("placeholder", $(label).html());
            $(label).remove();
        }      
      });
    }
  };
  
  //////////////// Disable input on Layout Paragraph Builder
  Drupal.behaviors.thesaasLPB = {
    attach: function (context, settings) {      
      $('.js-lpb-component .block-contact textarea, .js-lpb-component .block-contact input, .js-lpb-component .block-simplenews input, .js-lpb-component .block-user input').each(function() {
        var thisElement = $(this);
        thisElement.attr('disabled', 'disabled');
    });
    }
  };

  //////////////// Granim
  Drupal.behaviors.thesaasGranim = {
    attach: function (context, settings) {    
  $('[data-granim]').each(function(){
      var tag       = $(this),
          granim    = tag.data('granim').split(','),
          gradients = [],
          opacity   = [1,1];

      var len = granim.length;
      if ( len > 0 ) {
        if ( granim[0].indexOf('-') > -1 ) {
          for (var i = 0; i < len; i++) {
            gradients[i] = granim[i].split('-');
          }

          for (var i = 0; i < gradients[0].length; i++) {
            opacity[i] = 1;
          }
        }
        else {
          for (var i = 0; i < len/2; i++) {
            gradients[i] = [granim[i*2], granim[i*2+1]];
          }
        }
      }

      var options = {
        element: tag[0],
        name: 'granim',
        direction: tag.dataAttr('direction', 'left-right'),
        isPausedWhenNotInView: true,
        opacity: opacity,
        states : {
          "default-state": {
            gradients: gradients,
            transitionSpeed: 5000,
            loop: true
          }
         }
      };

      if (tag.hasDataAttr('opacity')) {
        options.opacity = tag.data('opacity').split(',');
      }

      if (tag.hasDataAttr('image')) {
        options.image = {
          source: tag.dataAttr('image', ''),
          position: ['center', 'center'],
          stretchMode: ['stretch-if-bigger', 'stretch-if-bigger'],
          blendingMode: 'multiply',
        }
      }

      var granimInstance = new Granim(options);

    });
    }
  };
  
  //////////////// Section - Put align-items and gutter classes to row
  Drupal.behaviors.thesaasSection = {
    attach: function (context, settings) {      
      $('[data-content-align]').each(function(index, element) {
        var thisSection = $(this),
            gutterClass = thisSection.attr('data-gutter-class') || '', 
            contentAlignClass = thisSection.attr('data-content-align') + ' h-100' || '';
        thisSection.find('div[class*="container"] > .row, .region--top + .row').addClass([gutterClass, contentAlignClass]);
      });
      /*$('div.paragraph--type--paragraph-layout').each(function(index, element) {
        var thisParagraph = $(this),
            gutterClass = thisParagraph.attr('data-gutter-class') || '', 
            contentAlignClass = thisParagraph.attr('data-content-align') || '';
        
        // Remove old gutter classes
        if (gutterClass) thisParagraph.find('.row').removeClass().addClass('row');

        // Add new gutter and content align classes
        thisParagraph.find('.row').addClass([gutterClass, contentAlignClass]);
      });*/
    }
  };


  
})(jQuery, Drupal);
