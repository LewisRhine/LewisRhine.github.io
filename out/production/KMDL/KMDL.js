var KMDL = function (Kotlin) {
  'use strict';
  var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
    mdlApp_ha0p99$: function (init) {
      var app = new _.MdlApp();
      init.call(app);
      return app;
    },
    MdlApp: Kotlin.createClass(null, function MdlApp() {
      this.app_0 = document.getElementById('MdlApp');
      if (this.app_0 == null) {
        var message = 'No MldApp Element found!';
        throw new Kotlin.IllegalArgumentException(message.toString());
      }
       else {
      }
    }, /** @lends _.MdlApp.prototype */ {
      navigationLayout_5xale7$: function (content, cssClass, init) {
        var tmp$0;
        if (cssClass === void 0)
          cssClass = '';
        var nl = new _.components.layout.navigationlayout.Layout(content, cssClass);
        init.call(nl);
        nl.mainElement.append(nl.content.content.mainElement);
        (tmp$0 = this.app_0) != null ? tmp$0.append(nl.mainElement) : null;
      }
    }, /** @lends _.MdlApp */ {
    }),
    materialIcon_61zpoe$: function (iconName) {
      var $receiver = document.createElement('i');
      $receiver.setAttribute('class', 'material-icons');
      $receiver.append(document.createTextNode(iconName));
      return $receiver;
    },
    header_p1nijx$: Kotlin.defineInlineFunction('KMDL.header_p1nijx$', function ($receiver, classId, init) {
      if (classId === void 0)
        classId = '';
      var $receiver_0 = document.createElement('header');
      _.classType_cjmw3z$($receiver_0, classId);
      var header = $receiver_0;
      init.call(header);
      $receiver.append(header);
      return header;
    }),
    img_vqntm7$: Kotlin.defineInlineFunction('KMDL.img_vqntm7$', function ($receiver, classId, init) {
      if (classId === void 0)
        classId = '';
      var img = new _.Img(classId);
      init.call(img);
      $receiver.append(img.mainElement);
      return img.mainElement;
    }),
    img_evnwe$: Kotlin.defineInlineFunction('KMDL.img_evnwe$', function (classId, init) {
      if (classId === void 0)
        classId = '';
      var img = new _.Img(classId);
      init.call(img);
      return img.mainElement;
    }),
    div_p1nijx$: Kotlin.defineInlineFunction('KMDL.div_p1nijx$', function ($receiver, classId, init) {
      if (classId === void 0)
        classId = '';
      var $receiver_0 = document.createElement('div');
      _.classType_cjmw3z$($receiver_0, classId);
      var div = $receiver_0;
      init.call(div);
      $receiver.append(div);
      return div;
    }),
    b_iin4qp$: Kotlin.defineInlineFunction('KMDL.b_iin4qp$', function ($receiver, init) {
      var b = document.createElement('b');
      init.call(b);
      $receiver.append(b);
      return b;
    }),
    h2_p1nijx$: Kotlin.defineInlineFunction('KMDL.h2_p1nijx$', function ($receiver, classId, init) {
      if (classId === void 0)
        classId = '';
      var $receiver_0 = document.createElement('h2');
      _.classType_cjmw3z$($receiver_0, classId);
      var h2 = $receiver_0;
      init.call(h2);
      $receiver.append(h2);
      return h2;
    }),
    span_p1nijx$: Kotlin.defineInlineFunction('KMDL.span_p1nijx$', function ($receiver, classId, init) {
      if (classId === void 0)
        classId = '';
      var $receiver_0 = document.createElement('span');
      _.classType_cjmw3z$($receiver_0, classId);
      var span = $receiver_0;
      init.call(span);
      $receiver.append(span);
      return span;
    }),
    span_s2ti8u$: Kotlin.defineInlineFunction('KMDL.span_s2ti8u$', function (classId, init) {
      if (classId === void 0)
        classId = '';
      var $receiver = document.createElement('span');
      _.classType_cjmw3z$($receiver, classId);
      var span = $receiver;
      init.call(span);
      return span;
    }),
    style_cjmw3z$: function ($receiver, style) {
      $receiver.setAttribute('style', style);
    },
    Img: Kotlin.createClass(function () {
      return [_.components.MdlComponent];
    }, function Img(cssClassId) {
      if (cssClassId === void 0)
        cssClassId = '';
      Img.baseInitializer.call(this, 'img', cssClassId);
      this.src$delegate = this.htmlPram_2rdptt$();
      this.width$delegate = this.htmlPram_2rdptt$();
      this.height$delegate = this.htmlPram_2rdptt$();
      this.border$delegate = this.htmlPram_2rdptt$();
      this.alt$delegate = this.htmlPram_2rdptt$();
    }, /** @lends _.Img.prototype */ {
      src: {
        get: function () {
          return this.src$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('src'));
        },
        set: function (src_0) {
          this.src$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('src'), src_0);
        }
      },
      width: {
        get: function () {
          return this.width$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('width'));
        },
        set: function (width_0) {
          this.width$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('width'), width_0);
        }
      },
      height: {
        get: function () {
          return this.height$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('height'));
        },
        set: function (height_0) {
          this.height$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('height'), height_0);
        }
      },
      border: {
        get: function () {
          return this.border$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('border'));
        },
        set: function (border_0) {
          this.border$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('border'), border_0);
        }
      },
      alt: {
        get: function () {
          return this.alt$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('alt'));
        },
        set: function (alt_0) {
          this.alt$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('alt'), alt_0);
        }
      }
    }),
    plus_fpnek0$: function ($receiver, element) {
      $receiver.append(element);
    },
    classType_cjmw3z$: function ($receiver, className) {
      $receiver.setAttribute('class', className);
    },
    MdlColor: Kotlin.createClass(null, function MdlColor() {
    }, null, /** @lends _.MdlColor */ {
      Background: Kotlin.createClass(function () {
        return [_.MdlColor];
      }, function Background() {
        Background.baseInitializer.call(this);
      }, null, /** @lends _.MdlColor.Background */ {
        blueGrey: Kotlin.createClass(function () {
          return [_.MdlColor.Background];
        }, function blueGrey(shade) {
          if (shade === void 0)
            shade = _.Shade.s500;
          blueGrey.baseInitializer.call(this);
          this.shade_0 = shade;
        }, /** @lends _.MdlColor.Background.blueGrey.prototype */ {
          toString: function () {
            return 'mdl-color--blue-grey-' + this.shade_0.value;
          }
        }),
        red: Kotlin.createClass(function () {
          return [_.MdlColor.Background];
        }, function red(shade) {
          if (shade === void 0)
            shade = _.Shade.s500;
          red.baseInitializer.call(this);
          this.shade_0 = shade;
        }, /** @lends _.MdlColor.Background.red.prototype */ {
          toString: function () {
            return 'mdl-color--red-' + this.shade_0.value;
          }
        }),
        pink: Kotlin.createClass(function () {
          return [_.MdlColor.Background];
        }, function pink(shade) {
          if (shade === void 0)
            shade = _.Shade.s500;
          pink.baseInitializer.call(this);
          this.shade_0 = shade;
        }, /** @lends _.MdlColor.Background.pink.prototype */ {
          toString: function () {
            return 'mdl-color--pink-' + this.shade_0.value;
          }
        }),
        purple: Kotlin.createClass(function () {
          return [_.MdlColor.Background];
        }, function purple(shade) {
          if (shade === void 0)
            shade = _.Shade.s500;
          purple.baseInitializer.call(this);
          this.shade_0 = shade;
        }, /** @lends _.MdlColor.Background.purple.prototype */ {
          toString: function () {
            return 'mdl-color--purple-' + this.shade_0.value;
          }
        }),
        deepPurple: Kotlin.createClass(function () {
          return [_.MdlColor.Background];
        }, function deepPurple(shade) {
          if (shade === void 0)
            shade = _.Shade.s500;
          deepPurple.baseInitializer.call(this);
          this.shade_0 = shade;
        }, /** @lends _.MdlColor.Background.deepPurple.prototype */ {
          toString: function () {
            return 'mdl-color--deep-purple-' + this.shade_0.value;
          }
        }),
        indigo: Kotlin.createClass(function () {
          return [_.MdlColor.Background];
        }, function indigo(shade) {
          if (shade === void 0)
            shade = _.Shade.s500;
          indigo.baseInitializer.call(this);
          this.shade_0 = shade;
        }, /** @lends _.MdlColor.Background.indigo.prototype */ {
          toString: function () {
            return 'mdl-color--indigo-' + this.shade_0.value;
          }
        }),
        blue: Kotlin.createClass(function () {
          return [_.MdlColor.Background];
        }, function blue(shade) {
          if (shade === void 0)
            shade = _.Shade.s500;
          blue.baseInitializer.call(this);
          this.shade_0 = shade;
        }, /** @lends _.MdlColor.Background.blue.prototype */ {
          toString: function () {
            return 'mdl-color--blue-' + this.shade_0.value;
          }
        }),
        lightBlue: Kotlin.createClass(function () {
          return [_.MdlColor.Background];
        }, function lightBlue(shade) {
          if (shade === void 0)
            shade = _.Shade.s500;
          lightBlue.baseInitializer.call(this);
          this.shade_0 = shade;
        }, /** @lends _.MdlColor.Background.lightBlue.prototype */ {
          toString: function () {
            return 'mdl-color--light-blue-' + this.shade_0.value;
          }
        }),
        cyan: Kotlin.createClass(function () {
          return [_.MdlColor.Background];
        }, function cyan(shade) {
          if (shade === void 0)
            shade = _.Shade.s500;
          cyan.baseInitializer.call(this);
          this.shade_0 = shade;
        }, /** @lends _.MdlColor.Background.cyan.prototype */ {
          toString: function () {
            return 'mdl-color--cyan-' + this.shade_0.value;
          }
        }),
        teal: Kotlin.createClass(function () {
          return [_.MdlColor.Background];
        }, function teal(shade) {
          if (shade === void 0)
            shade = _.Shade.s500;
          teal.baseInitializer.call(this);
          this.shade_0 = shade;
        }, /** @lends _.MdlColor.Background.teal.prototype */ {
          toString: function () {
            return 'mdl-color--teal-' + this.shade_0.value;
          }
        }),
        green: Kotlin.createClass(function () {
          return [_.MdlColor.Background];
        }, function green(shade) {
          if (shade === void 0)
            shade = _.Shade.s500;
          green.baseInitializer.call(this);
          this.shade_0 = shade;
        }, /** @lends _.MdlColor.Background.green.prototype */ {
          toString: function () {
            return 'mdl-color--green-' + this.shade_0.value;
          }
        }),
        lightGreen: Kotlin.createClass(function () {
          return [_.MdlColor.Background];
        }, function lightGreen(shade) {
          if (shade === void 0)
            shade = _.Shade.s500;
          lightGreen.baseInitializer.call(this);
          this.shade_0 = shade;
        }, /** @lends _.MdlColor.Background.lightGreen.prototype */ {
          toString: function () {
            return 'mdl-color--light-green-' + this.shade_0.value;
          }
        }),
        lime: Kotlin.createClass(function () {
          return [_.MdlColor.Background];
        }, function lime(shade) {
          if (shade === void 0)
            shade = _.Shade.s500;
          lime.baseInitializer.call(this);
          this.shade_0 = shade;
        }, /** @lends _.MdlColor.Background.lime.prototype */ {
          toString: function () {
            return 'mdl-color--lime-' + this.shade_0.value;
          }
        }),
        yellow: Kotlin.createClass(function () {
          return [_.MdlColor.Background];
        }, function yellow(shade) {
          if (shade === void 0)
            shade = _.Shade.s500;
          yellow.baseInitializer.call(this);
          this.shade_0 = shade;
        }, /** @lends _.MdlColor.Background.yellow.prototype */ {
          toString: function () {
            return 'mdl-color--yellow-' + this.shade_0.value;
          }
        }),
        amber: Kotlin.createClass(function () {
          return [_.MdlColor.Background];
        }, function amber(shade) {
          if (shade === void 0)
            shade = _.Shade.s500;
          amber.baseInitializer.call(this);
          this.shade_0 = shade;
        }, /** @lends _.MdlColor.Background.amber.prototype */ {
          toString: function () {
            return 'mdl-color--amber-' + this.shade_0.value;
          }
        }),
        orange: Kotlin.createClass(function () {
          return [_.MdlColor.Background];
        }, function orange(shade) {
          if (shade === void 0)
            shade = _.Shade.s500;
          orange.baseInitializer.call(this);
          this.shade_0 = shade;
        }, /** @lends _.MdlColor.Background.orange.prototype */ {
          toString: function () {
            return 'mdl-color--orange-' + this.shade_0.value;
          }
        }),
        deepOrange: Kotlin.createClass(function () {
          return [_.MdlColor.Background];
        }, function deepOrange(shade) {
          if (shade === void 0)
            shade = _.Shade.s500;
          deepOrange.baseInitializer.call(this);
          this.shade_0 = shade;
        }, /** @lends _.MdlColor.Background.deepOrange.prototype */ {
          toString: function () {
            return 'mdl-color--deep-orange-' + this.shade_0.value;
          }
        }),
        brown: Kotlin.createClass(function () {
          return [_.MdlColor.Background];
        }, function brown(shade) {
          if (shade === void 0)
            shade = _.Shade.s500;
          brown.baseInitializer.call(this);
          this.shade_0 = shade;
        }, /** @lends _.MdlColor.Background.brown.prototype */ {
          toString: function () {
            return 'mdl-color--brown-' + this.shade_0.value;
          }
        }),
        grey: Kotlin.createClass(function () {
          return [_.MdlColor.Background];
        }, function grey(shade) {
          if (shade === void 0)
            shade = _.Shade.s500;
          grey.baseInitializer.call(this);
          this.shade_0 = shade;
        }, /** @lends _.MdlColor.Background.grey.prototype */ {
          toString: function () {
            return 'mdl-color--grey-' + this.shade_0.value;
          }
        }),
        white: Kotlin.createClass(function () {
          return [_.MdlColor.Background];
        }, function white() {
          white.baseInitializer.call(this);
        }, /** @lends _.MdlColor.Background.white.prototype */ {
          toString: function () {
            return 'mdl-color--white';
          }
        }),
        black: Kotlin.createClass(function () {
          return [_.MdlColor.Background];
        }, function black() {
          black.baseInitializer.call(this);
        }, /** @lends _.MdlColor.Background.black.prototype */ {
          toString: function () {
            return 'mdl-color--black';
          }
        })
      }),
      Text: Kotlin.createClass(function () {
        return [_.MdlColor];
      }, function Text$() {
        Text$.baseInitializer.call(this);
      }, null, /** @lends _.MdlColor.Text */ {
        blueGrey: Kotlin.createClass(function () {
          return [_.MdlColor.Text];
        }, function blueGrey(shade) {
          if (shade === void 0)
            shade = _.Shade.s500;
          blueGrey.baseInitializer.call(this);
          this.shade_0 = shade;
        }, /** @lends _.MdlColor.Text.blueGrey.prototype */ {
          toString: function () {
            return 'mdl-color-text--blue-grey-' + this.shade_0.value;
          }
        }),
        red: Kotlin.createClass(function () {
          return [_.MdlColor.Text];
        }, function red(shade) {
          if (shade === void 0)
            shade = _.Shade.s500;
          red.baseInitializer.call(this);
          this.shade_0 = shade;
        }, /** @lends _.MdlColor.Text.red.prototype */ {
          toString: function () {
            return 'mdl-color-text--red-' + this.shade_0.value;
          }
        }),
        pink: Kotlin.createClass(function () {
          return [_.MdlColor.Text];
        }, function pink(shade) {
          if (shade === void 0)
            shade = _.Shade.s500;
          pink.baseInitializer.call(this);
          this.shade_0 = shade;
        }, /** @lends _.MdlColor.Text.pink.prototype */ {
          toString: function () {
            return 'mdl-color-text--pink-' + this.shade_0.value;
          }
        }),
        purple: Kotlin.createClass(function () {
          return [_.MdlColor.Text];
        }, function purple(shade) {
          if (shade === void 0)
            shade = _.Shade.s500;
          purple.baseInitializer.call(this);
          this.shade_0 = shade;
        }, /** @lends _.MdlColor.Text.purple.prototype */ {
          toString: function () {
            return 'mdl-color-text--purple-' + this.shade_0.value;
          }
        }),
        deepPurple: Kotlin.createClass(function () {
          return [_.MdlColor.Text];
        }, function deepPurple(shade) {
          if (shade === void 0)
            shade = _.Shade.s500;
          deepPurple.baseInitializer.call(this);
          this.shade_0 = shade;
        }, /** @lends _.MdlColor.Text.deepPurple.prototype */ {
          toString: function () {
            return 'mdl-color-text--deep-purple-' + this.shade_0.value;
          }
        }),
        indigo: Kotlin.createClass(function () {
          return [_.MdlColor.Text];
        }, function indigo(shade) {
          if (shade === void 0)
            shade = _.Shade.s500;
          indigo.baseInitializer.call(this);
          this.shade_0 = shade;
        }, /** @lends _.MdlColor.Text.indigo.prototype */ {
          toString: function () {
            return 'mdl-color-text--indigo-' + this.shade_0.value;
          }
        }),
        blue: Kotlin.createClass(function () {
          return [_.MdlColor.Text];
        }, function blue(shade) {
          if (shade === void 0)
            shade = _.Shade.s500;
          blue.baseInitializer.call(this);
          this.shade_0 = shade;
        }, /** @lends _.MdlColor.Text.blue.prototype */ {
          toString: function () {
            return 'mdl-color-text--blue-' + this.shade_0.value;
          }
        }),
        lightBlue: Kotlin.createClass(function () {
          return [_.MdlColor.Text];
        }, function lightBlue(shade) {
          if (shade === void 0)
            shade = _.Shade.s500;
          lightBlue.baseInitializer.call(this);
          this.shade_0 = shade;
        }, /** @lends _.MdlColor.Text.lightBlue.prototype */ {
          toString: function () {
            return 'mdl-color-text--light-blue-' + this.shade_0.value;
          }
        }),
        cyan: Kotlin.createClass(function () {
          return [_.MdlColor.Text];
        }, function cyan(shade) {
          if (shade === void 0)
            shade = _.Shade.s500;
          cyan.baseInitializer.call(this);
          this.shade_0 = shade;
        }, /** @lends _.MdlColor.Text.cyan.prototype */ {
          toString: function () {
            return 'mdl-color-text--cyan-' + this.shade_0.value;
          }
        }),
        teal: Kotlin.createClass(function () {
          return [_.MdlColor.Text];
        }, function teal(shade) {
          if (shade === void 0)
            shade = _.Shade.s500;
          teal.baseInitializer.call(this);
          this.shade_0 = shade;
        }, /** @lends _.MdlColor.Text.teal.prototype */ {
          toString: function () {
            return 'mdl-color-text--teal-' + this.shade_0.value;
          }
        }),
        green: Kotlin.createClass(function () {
          return [_.MdlColor.Text];
        }, function green(shade) {
          if (shade === void 0)
            shade = _.Shade.s500;
          green.baseInitializer.call(this);
          this.shade_0 = shade;
        }, /** @lends _.MdlColor.Text.green.prototype */ {
          toString: function () {
            return 'mdl-color-text--green-' + this.shade_0.value;
          }
        }),
        lightGreen: Kotlin.createClass(function () {
          return [_.MdlColor.Text];
        }, function lightGreen(shade) {
          if (shade === void 0)
            shade = _.Shade.s500;
          lightGreen.baseInitializer.call(this);
          this.shade_0 = shade;
        }, /** @lends _.MdlColor.Text.lightGreen.prototype */ {
          toString: function () {
            return 'mdl-color-text--light-green-' + this.shade_0.value;
          }
        }),
        lime: Kotlin.createClass(function () {
          return [_.MdlColor.Text];
        }, function lime(shade) {
          if (shade === void 0)
            shade = _.Shade.s500;
          lime.baseInitializer.call(this);
          this.shade_0 = shade;
        }, /** @lends _.MdlColor.Text.lime.prototype */ {
          toString: function () {
            return 'mdl-color-text--lime-' + this.shade_0.value;
          }
        }),
        yellow: Kotlin.createClass(function () {
          return [_.MdlColor.Text];
        }, function yellow(shade) {
          if (shade === void 0)
            shade = _.Shade.s500;
          yellow.baseInitializer.call(this);
          this.shade_0 = shade;
        }, /** @lends _.MdlColor.Text.yellow.prototype */ {
          toString: function () {
            return 'mdl-color-text--yellow-' + this.shade_0.value;
          }
        }),
        amber: Kotlin.createClass(function () {
          return [_.MdlColor.Text];
        }, function amber(shade) {
          if (shade === void 0)
            shade = _.Shade.s500;
          amber.baseInitializer.call(this);
          this.shade_0 = shade;
        }, /** @lends _.MdlColor.Text.amber.prototype */ {
          toString: function () {
            return 'mdl-color-text--amber-' + this.shade_0.value;
          }
        }),
        orange: Kotlin.createClass(function () {
          return [_.MdlColor.Text];
        }, function orange(shade) {
          if (shade === void 0)
            shade = _.Shade.s500;
          orange.baseInitializer.call(this);
          this.shade_0 = shade;
        }, /** @lends _.MdlColor.Text.orange.prototype */ {
          toString: function () {
            return 'mdl-color-text--orange-' + this.shade_0.value;
          }
        }),
        deepOrange: Kotlin.createClass(function () {
          return [_.MdlColor.Text];
        }, function deepOrange(shade) {
          if (shade === void 0)
            shade = _.Shade.s500;
          deepOrange.baseInitializer.call(this);
          this.shade_0 = shade;
        }, /** @lends _.MdlColor.Text.deepOrange.prototype */ {
          toString: function () {
            return 'mdl-color-text--deep-orange-' + this.shade_0.value;
          }
        }),
        brown: Kotlin.createClass(function () {
          return [_.MdlColor.Text];
        }, function brown(shade) {
          if (shade === void 0)
            shade = _.Shade.s500;
          brown.baseInitializer.call(this);
          this.shade_0 = shade;
        }, /** @lends _.MdlColor.Text.brown.prototype */ {
          toString: function () {
            return 'mdl-color-text--brown-' + this.shade_0.value;
          }
        }),
        grey: Kotlin.createClass(function () {
          return [_.MdlColor.Text];
        }, function grey(shade) {
          if (shade === void 0)
            shade = _.Shade.s500;
          grey.baseInitializer.call(this);
          this.shade_0 = shade;
        }, /** @lends _.MdlColor.Text.grey.prototype */ {
          toString: function () {
            return 'mdl-color-text--grey-' + this.shade_0.value;
          }
        }),
        white: Kotlin.createClass(function () {
          return [_.MdlColor.Text];
        }, function white() {
          white.baseInitializer.call(this);
        }, /** @lends _.MdlColor.Text.white.prototype */ {
          toString: function () {
            return 'mdl-color-text--white';
          }
        }),
        black: Kotlin.createClass(function () {
          return [_.MdlColor.Text];
        }, function black() {
          black.baseInitializer.call(this);
        }, /** @lends _.MdlColor.Text.black.prototype */ {
          toString: function () {
            return 'mdl-color-text--black';
          }
        })
      })
    }),
    ColorPalette: Kotlin.createEnumClass(function () {
      return [Kotlin.Enum];
    }, function ColorPalette() {
      ColorPalette.baseInitializer.call(this);
    }, function () {
      return {
        blueGrey: Kotlin.createObject(function () {
          return [_.ColorPalette];
        }, function blueGrey() {
          blueGrey.baseInitializer.call(this);
          this.value_vn18i3$_0 = 'blue-grey';
        }, /** @lends _.ColorPalette.blueGrey.prototype */ {
          value: {
            get: function () {
              return this.value_vn18i3$_0;
            }
          }
        }),
        red: Kotlin.createObject(function () {
          return [_.ColorPalette];
        }, function red() {
          red.baseInitializer.call(this);
          this.value_53ls1r$_0 = 'red';
        }, /** @lends _.ColorPalette.red.prototype */ {
          value: {
            get: function () {
              return this.value_53ls1r$_0;
            }
          }
        }),
        pink: Kotlin.createObject(function () {
          return [_.ColorPalette];
        }, function pink() {
          pink.baseInitializer.call(this);
          this.value_g0i8y6$_0 = 'pink';
        }, /** @lends _.ColorPalette.pink.prototype */ {
          value: {
            get: function () {
              return this.value_g0i8y6$_0;
            }
          }
        }),
        purple: Kotlin.createObject(function () {
          return [_.ColorPalette];
        }, function purple() {
          purple.baseInitializer.call(this);
          this.value_ifg308$_0 = 'purple';
        }, /** @lends _.ColorPalette.purple.prototype */ {
          value: {
            get: function () {
              return this.value_ifg308$_0;
            }
          }
        }),
        deepPurple: Kotlin.createObject(function () {
          return [_.ColorPalette];
        }, function deepPurple() {
          deepPurple.baseInitializer.call(this);
          this.value_qe0m2s$_0 = 'deep-purple';
        }, /** @lends _.ColorPalette.deepPurple.prototype */ {
          value: {
            get: function () {
              return this.value_qe0m2s$_0;
            }
          }
        }),
        indigo: Kotlin.createObject(function () {
          return [_.ColorPalette];
        }, function indigo() {
          indigo.baseInitializer.call(this);
          this.value_hcuzxu$_0 = 'indigo';
        }, /** @lends _.ColorPalette.indigo.prototype */ {
          value: {
            get: function () {
              return this.value_hcuzxu$_0;
            }
          }
        }),
        blue: Kotlin.createObject(function () {
          return [_.ColorPalette];
        }, function blue() {
          blue.baseInitializer.call(this);
          this.value_fsv6ne$_0 = 'blue';
        }, /** @lends _.ColorPalette.blue.prototype */ {
          value: {
            get: function () {
              return this.value_fsv6ne$_0;
            }
          }
        }),
        lightBlue: Kotlin.createObject(function () {
          return [_.ColorPalette];
        }, function lightBlue() {
          lightBlue.baseInitializer.call(this);
          this.value_b7ibmo$_0 = 'light-blue';
        }, /** @lends _.ColorPalette.lightBlue.prototype */ {
          value: {
            get: function () {
              return this.value_b7ibmo$_0;
            }
          }
        }),
        cyan: Kotlin.createObject(function () {
          return [_.ColorPalette];
        }, function cyan() {
          cyan.baseInitializer.call(this);
          this.value_ftmvgh$_0 = 'cyan';
        }, /** @lends _.ColorPalette.cyan.prototype */ {
          value: {
            get: function () {
              return this.value_ftmvgh$_0;
            }
          }
        }),
        teal: Kotlin.createObject(function () {
          return [_.ColorPalette];
        }, function teal() {
          teal.baseInitializer.call(this);
          this.value_g2mlrc$_0 = 'teal';
        }, /** @lends _.ColorPalette.teal.prototype */ {
          value: {
            get: function () {
              return this.value_g2mlrc$_0;
            }
          }
        }),
        green: Kotlin.createObject(function () {
          return [_.ColorPalette];
        }, function green() {
          green.baseInitializer.call(this);
          this.value_4woynn$_0 = 'green';
        }, /** @lends _.ColorPalette.green.prototype */ {
          value: {
            get: function () {
              return this.value_4woynn$_0;
            }
          }
        }),
        lightGreen: Kotlin.createObject(function () {
          return [_.ColorPalette];
        }, function lightGreen() {
          lightGreen.baseInitializer.call(this);
          this.value_a50ydz$_0 = 'light-green';
        }, /** @lends _.ColorPalette.lightGreen.prototype */ {
          value: {
            get: function () {
              return this.value_a50ydz$_0;
            }
          }
        }),
        lime: Kotlin.createObject(function () {
          return [_.ColorPalette];
        }, function lime() {
          lime.baseInitializer.call(this);
          this.value_fyb1ov$_0 = 'Lime';
        }, /** @lends _.ColorPalette.lime.prototype */ {
          value: {
            get: function () {
              return this.value_fyb1ov$_0;
            }
          }
        }),
        yellow: Kotlin.createObject(function () {
          return [_.ColorPalette];
        }, function yellow() {
          yellow.baseInitializer.call(this);
          this.value_yyx7v4$_0 = 'yellow';
        }, /** @lends _.ColorPalette.yellow.prototype */ {
          value: {
            get: function () {
              return this.value_yyx7v4$_0;
            }
          }
        }),
        amber: Kotlin.createObject(function () {
          return [_.ColorPalette];
        }, function amber() {
          amber.baseInitializer.call(this);
          this.value_7trkur$_0 = 'amber';
        }, /** @lends _.ColorPalette.amber.prototype */ {
          value: {
            get: function () {
              return this.value_7trkur$_0;
            }
          }
        }),
        orange: Kotlin.createObject(function () {
          return [_.ColorPalette];
        }, function orange() {
          orange.baseInitializer.call(this);
          this.value_ysd46i$_0 = 'orange';
        }, /** @lends _.ColorPalette.orange.prototype */ {
          value: {
            get: function () {
              return this.value_ysd46i$_0;
            }
          }
        }),
        deepOrange: Kotlin.createObject(function () {
          return [_.ColorPalette];
        }, function deepOrange() {
          deepOrange.baseInitializer.call(this);
          this.value_sa6eq2$_0 = 'deep-orange';
        }, /** @lends _.ColorPalette.deepOrange.prototype */ {
          value: {
            get: function () {
              return this.value_sa6eq2$_0;
            }
          }
        }),
        brown: Kotlin.createObject(function () {
          return [_.ColorPalette];
        }, function brown() {
          brown.baseInitializer.call(this);
          this.value_79qbeu$_0 = 'brown';
        }, /** @lends _.ColorPalette.brown.prototype */ {
          value: {
            get: function () {
              return this.value_79qbeu$_0;
            }
          }
        }),
        grey: Kotlin.createObject(function () {
          return [_.ColorPalette];
        }, function grey() {
          grey.baseInitializer.call(this);
          this.value_fvpo5h$_0 = 'grey';
        }, /** @lends _.ColorPalette.grey.prototype */ {
          value: {
            get: function () {
              return this.value_fvpo5h$_0;
            }
          }
        }),
        white: Kotlin.createObject(function () {
          return [_.ColorPalette];
        }, function white() {
          white.baseInitializer.call(this);
          this.value_2ilwkn$_0 = 'white';
        }, /** @lends _.ColorPalette.white.prototype */ {
          value: {
            get: function () {
              return this.value_2ilwkn$_0;
            }
          }
        }),
        black: Kotlin.createObject(function () {
          return [_.ColorPalette];
        }, function black() {
          black.baseInitializer.call(this);
          this.value_7dafov$_0 = 'black';
        }, /** @lends _.ColorPalette.black.prototype */ {
          value: {
            get: function () {
              return this.value_7dafov$_0;
            }
          }
        })
      };
    }),
    Shade: Kotlin.createEnumClass(function () {
      return [Kotlin.Enum];
    }, function Shade() {
      Shade.baseInitializer.call(this);
    }, function () {
      return {
        s50: Kotlin.createObject(function () {
          return [_.Shade];
        }, function s50() {
          s50.baseInitializer.call(this);
          this.value_a952wd$_0 = '50';
        }, /** @lends _.Shade.s50.prototype */ {
          value: {
            get: function () {
              return this.value_a952wd$_0;
            }
          }
        }),
        s100: Kotlin.createObject(function () {
          return [_.Shade];
        }, function s100() {
          s100.baseInitializer.call(this);
          this.value_xquptn$_0 = '100';
        }, /** @lends _.Shade.s100.prototype */ {
          value: {
            get: function () {
              return this.value_xquptn$_0;
            }
          }
        }),
        s200: Kotlin.createObject(function () {
          return [_.Shade];
        }, function s200() {
          s200.baseInitializer.call(this);
          this.value_xqvct6$_0 = '200';
        }, /** @lends _.Shade.s200.prototype */ {
          value: {
            get: function () {
              return this.value_xqvct6$_0;
            }
          }
        }),
        s300: Kotlin.createObject(function () {
          return [_.Shade];
        }, function s300() {
          s300.baseInitializer.call(this);
          this.value_xqvzsp$_0 = '300';
        }, /** @lends _.Shade.s300.prototype */ {
          value: {
            get: function () {
              return this.value_xqvzsp$_0;
            }
          }
        }),
        s400: Kotlin.createObject(function () {
          return [_.Shade];
        }, function s400() {
          s400.baseInitializer.call(this);
          this.value_xqwms8$_0 = '400';
        }, /** @lends _.Shade.s400.prototype */ {
          value: {
            get: function () {
              return this.value_xqwms8$_0;
            }
          }
        }),
        s500: Kotlin.createObject(function () {
          return [_.Shade];
        }, function s500() {
          s500.baseInitializer.call(this);
          this.value_xqx9rr$_0 = '500';
        }, /** @lends _.Shade.s500.prototype */ {
          value: {
            get: function () {
              return this.value_xqx9rr$_0;
            }
          }
        }),
        s600: Kotlin.createObject(function () {
          return [_.Shade];
        }, function s600() {
          s600.baseInitializer.call(this);
          this.value_xqxwra$_0 = '600';
        }, /** @lends _.Shade.s600.prototype */ {
          value: {
            get: function () {
              return this.value_xqxwra$_0;
            }
          }
        }),
        s700: Kotlin.createObject(function () {
          return [_.Shade];
        }, function s700() {
          s700.baseInitializer.call(this);
          this.value_xqyjqt$_0 = '700';
        }, /** @lends _.Shade.s700.prototype */ {
          value: {
            get: function () {
              return this.value_xqyjqt$_0;
            }
          }
        }),
        s800: Kotlin.createObject(function () {
          return [_.Shade];
        }, function s800() {
          s800.baseInitializer.call(this);
          this.value_xqz6qc$_0 = '800';
        }, /** @lends _.Shade.s800.prototype */ {
          value: {
            get: function () {
              return this.value_xqz6qc$_0;
            }
          }
        }),
        s900: Kotlin.createObject(function () {
          return [_.Shade];
        }, function s900() {
          s900.baseInitializer.call(this);
          this.value_xqztpv$_0 = '900';
        }, /** @lends _.Shade.s900.prototype */ {
          value: {
            get: function () {
              return this.value_xqztpv$_0;
            }
          }
        })
      };
    }),
    components: Kotlin.definePackage(null, /** @lends _.components */ {
      MdlComponent: Kotlin.createClass(null, function MdlComponent(tag, classType, cssClassId) {
        if (cssClassId === void 0)
          cssClassId = '';
        var $receiver = document.createElement(tag);
        _.classType_cjmw3z$($receiver, cssClassId + ' ' + classType);
        this.mainElement = $receiver;
        this.backgroundColor_yg5w92$_0 = null;
      }, /** @lends _.components.MdlComponent.prototype */ {
        backgroundColor: {
          get: function () {
            return this.backgroundColor_yg5w92$_0;
          },
          set: function (value) {
            var tmp$0;
            if (value != null) {
              var block$result;
              var tmp$2, tmp$1;
              this.mainElement.setAttribute('class', (tmp$1 = (tmp$2 = this.mainElement.getAttribute('class')) != null ? tmp$2 + (' ' + value) : null) != null ? tmp$1 : Kotlin.throwNPE());
              tmp$0 = block$result;
            }
             else
              tmp$0 = null;
            tmp$0;
          }
        },
        htmlPram_2rdptt$: function (parent) {
          if (parent === void 0)
            parent = this.mainElement;
          return new _.components.MdlComponent.htmlPram$f(parent);
        },
        htmlTextPram_5ljwfj$: function (text, parent) {
          if (text === void 0)
            text = '';
          if (parent === void 0)
            parent = this.mainElement;
          return new _.components.MdlComponent.htmlTextPram$f(parent, text);
        },
        appendToMain_ckfxvk$: function (initItem) {
          return new _.components.MdlComponent.appendToMain$f(this, initItem);
        },
        appendToMainIf_mmjay7$: function (condition, initItem) {
          return new _.components.MdlComponent.appendToMainIf$f(condition, this, initItem);
        },
        unaryPlus_ejp6nl$: function ($receiver) {
          this.mainElement.append($receiver);
        }
      }, /** @lends _.components.MdlComponent */ {
        htmlPram$f: Kotlin.createClass(function () {
          return [Kotlin.kotlin.properties.ReadWriteProperty];
        }, function (closure$parent_0) {
          this.closure$parent_0 = closure$parent_0;
          this.prop_0 = null;
        }, /** @lends _.components.MdlComponent.htmlPram$f.prototype */ {
          getValue_dsk1ci$: function (thisRef, property) {
            var tmp$0;
            tmp$0 = this.prop_0;
            if (tmp$0 == null) {
              throw new Kotlin.IllegalStateException('Property ' + property.name + ' should be initialized before get.');
            }
            return tmp$0;
          },
          setValue_w32e13$: function (thisRef, property, value) {
            var tmp$0;
            this.prop_0 = value;
            this.set_0(property.name, (tmp$0 = this.prop_0) != null ? tmp$0 : Kotlin.throwNPE());
          },
          set_0: function (name, value) {
            this.closure$parent_0.setAttribute(name, value.toString());
            if (Kotlin.equals(name, 'href'))
              this.closure$parent_0.setAttribute('target', '_blank');
          }
        }, /** @lends _.components.MdlComponent.htmlPram$f */ {
        }),
        htmlTextPram$f: Kotlin.createClass(function () {
          return [Kotlin.kotlin.properties.ReadWriteProperty];
        }, function (closure$parent_0, closure$text_0) {
          this.closure$parent_0 = closure$parent_0;
          this.prop_0 = closure$text_0;
          this.set_0(this.prop_0);
        }, /** @lends _.components.MdlComponent.htmlTextPram$f.prototype */ {
          getValue_dsk1ci$: function (thisRef, property) {
            return this.prop_0;
          },
          setValue_w32e13$: function (thisRef, property, value) {
            this.prop_0 = value;
            this.set_0(this.prop_0);
          },
          set_0: function (text) {
            this.closure$parent_0.textContent = text;
          }
        }, /** @lends _.components.MdlComponent.htmlTextPram$f */ {
        }),
        appendToMain$f: Kotlin.createClass(function () {
          return [Kotlin.kotlin.properties.ReadWriteProperty];
        }, function (this$MdlComponent_1, closure$initItem_0) {
          this.this$MdlComponent_0 = this$MdlComponent_1;
          this.item = closure$initItem_0;
          this$MdlComponent_1.mainElement.append(this.item.mainElement);
        }, /** @lends _.components.MdlComponent.appendToMain$f.prototype */ {
          getValue_dsk1ci$: function (thisRef, property) {
            return this.item;
          },
          setValue_w32e13$: function (thisRef, property, value) {
            this.this$MdlComponent_0.mainElement.append(value.mainElement);
            this.item = value;
          }
        }, /** @lends _.components.MdlComponent.appendToMain$f */ {
        }),
        appendToMainIf$f: Kotlin.createClass(function () {
          return [Kotlin.kotlin.properties.ReadWriteProperty];
        }, function (closure$condition_1, this$MdlComponent_1, closure$initItem_0) {
          this.closure$condition_0 = closure$condition_1;
          this.this$MdlComponent_0 = this$MdlComponent_1;
          this.item = closure$initItem_0;
          if (closure$condition_1)
            this$MdlComponent_1.mainElement.append(this.item.mainElement);
        }, /** @lends _.components.MdlComponent.appendToMainIf$f.prototype */ {
          getValue_dsk1ci$: function (thisRef, property) {
            return this.item;
          },
          setValue_w32e13$: function (thisRef, property, value) {
            if (this.closure$condition_0) {
              this.this$MdlComponent_0.mainElement.append(value.mainElement);
              this.item = value;
            }
          }
        }, /** @lends _.components.MdlComponent.appendToMainIf$f */ {
        })
      }),
      list_qq0o78$: Kotlin.defineInlineFunction('KMDL.components.list_qq0o78$', function ($receiver, cssClassId, init) {
        if (cssClassId === void 0)
          cssClassId = '';
        var list = new _.components.List(cssClassId);
        init.call(list);
        _.plus_fpnek0$($receiver, list.mainElement);
        return list.mainElement;
      }),
      List: Kotlin.createClass(function () {
        return [_.components.MdlComponent];
      }, function List(cssClassId) {
        if (cssClassId === void 0)
          cssClassId = '';
        List.baseInitializer.call(this, 'ul', 'mdl-list', cssClassId);
      }, /** @lends _.components.List.prototype */ {
        item_ccvxaz$: function (listIem) {
          var tmp$1 = this.mainElement;
          var $receiver = document.createElement('li');
          _.classType_cjmw3z$($receiver, 'mdl-list__item mdl-list__item--three-line');
          var classId = 'mdl-list__item-text-body';
          var $receiver_0 = document.createElement('span');
          _.classType_cjmw3z$($receiver_0, classId);
          var span = $receiver_0;
          span.textContent = listIem.primaryText;
          $receiver.append(span);
          _.plus_fpnek0$(tmp$1, $receiver);
        }
      }, /** @lends _.components.List */ {
      }),
      ListIem: Kotlin.createClass(null, function ListIem(primaryText) {
        this.primaryText = primaryText;
      }, /** @lends _.components.ListIem.prototype */ {
        component1: function () {
          return this.primaryText;
        },
        copy_61zpoe$: function (primaryText) {
          return new _.components.ListIem(primaryText === void 0 ? this.primaryText : primaryText);
        },
        toString: function () {
          return 'ListIem(primaryText=' + Kotlin.toString(this.primaryText) + ')';
        },
        hashCode: function () {
          var result = 0;
          result = result * 31 + Kotlin.hashCode(this.primaryText) | 0;
          return result;
        },
        equals_za3rmp$: function (other) {
          return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.primaryText, other.primaryText))));
        }
      }),
      chip_pcugjt$: function ($receiver, cssClassId, contact, init) {
        if (cssClassId === void 0)
          cssClassId = '';
        if (contact === void 0)
          contact = false;
        var chip = new _.components.Chip(cssClassId, contact);
        init.call(chip);
        chip.mainElement.setAttribute('style', 'margin-right:5px;');
        $receiver.append(chip.mainElement);
        return chip.mainElement;
      },
      Chip: Kotlin.createClass(function () {
        return [_.components.MdlComponent];
      }, function Chip(cssClassId, contact) {
        if (cssClassId === void 0)
          cssClassId = '';
        if (contact === void 0)
          contact = false;
        Chip.baseInitializer.call(this, 'span', 'mdl-chip ' + (contact ? 'mdl-chip--contact' : ''), cssClassId);
        this.img$delegate = this.appendToMainIf_mmjay7$(contact, new _.components.Chip.ContactImage());
        this.span$delegate = this.appendToMain_ckfxvk$(new _.components.Chip.ChipText());
        this.text$delegate = this.htmlTextPram_5ljwfj$('', this.span_0.mainElement);
        this.src$delegate = this.htmlPram_2rdptt$(this.img_0.mainElement);
      }, /** @lends _.components.Chip.prototype */ {
        img_0: {
          get: function () {
            return this.img$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('img'));
          }
        },
        span_0: {
          get: function () {
            return this.span$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('span'));
          }
        },
        text: {
          get: function () {
            return this.text$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('text'));
          },
          set: function (text_0) {
            this.text$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('text'), text_0);
          }
        },
        src: {
          get: function () {
            return this.src$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('src'));
          },
          set: function (src_0) {
            this.src$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('src'), src_0);
          }
        }
      }, /** @lends _.components.Chip */ {
        ChipText: Kotlin.createClass(function () {
          return [_.components.MdlComponent];
        }, function ChipText() {
          ChipText.baseInitializer.call(this, 'span', 'mdl-chip__text');
        }),
        ContactImage: Kotlin.createClass(function () {
          return [_.components.MdlComponent];
        }, function ContactImage() {
          ContactImage.baseInitializer.call(this, 'img', 'mdl-chip__contact');
        })
      }),
      card_sldsde$: function ($receiver, cssClassId, shadow, init) {
        if (cssClassId === void 0)
          cssClassId = '';
        if (shadow === void 0)
          shadow = _.components.Card.Shadow.DP2;
        var card = new _.components.Card(cssClassId, shadow);
        init.call(card);
        $receiver.append(card.mainElement);
        return card.mainElement;
      },
      Card: Kotlin.createClass(function () {
        return [_.components.MdlComponent];
      }, function Card(cssClassId, shadow) {
        if (cssClassId === void 0)
          cssClassId = '';
        if (shadow === void 0)
          shadow = _.components.Card.Shadow.DP2;
        Card.baseInitializer.call(this, 'div', 'mdl-card ' + shadow, cssClassId);
        this.title_j37a5u$_0 = '';
        this.supportingText_j37a5u$_0 = '';
      }, /** @lends _.components.Card.prototype */ {
        size_vux9f0$: function (width, height) {
          if (width === void 0)
            width = -1;
          if (height === void 0)
            height = -1;
          this.mainElement.setAttribute('style', 'width: ' + width + 'px; height: ' + height + 'px;');
        },
        title: {
          get: function () {
            return this.title_j37a5u$_0;
          },
          set: function (value) {
            var $receiver = this.mainElement;
            var classId = 'mdl-card__title';
            var $receiver_0 = document.createElement('div');
            _.classType_cjmw3z$($receiver_0, classId);
            var div = $receiver_0;
            var classId_0 = 'mdl-card__title-text';
            var $receiver_1 = document.createElement('h2');
            _.classType_cjmw3z$($receiver_1, classId_0);
            var h2 = $receiver_1;
            h2.textContent = value;
            div.append(h2);
            $receiver.append(div);
          }
        },
        supportingText: {
          get: function () {
            return this.supportingText_j37a5u$_0;
          },
          set: function (value) {
            var $receiver = this.mainElement;
            var classId = 'mdl-card__supporting-text';
            var $receiver_0 = document.createElement('div');
            _.classType_cjmw3z$($receiver_0, classId);
            var div = $receiver_0;
            div.textContent = value;
            $receiver.append(div);
          }
        }
      }, /** @lends _.components.Card */ {
        Shadow: Kotlin.createEnumClass(function () {
          return [Kotlin.Enum];
        }, function Shadow() {
          Shadow.baseInitializer.call(this);
        }, function () {
          return {
            DP2: Kotlin.createObject(function () {
              return [_.components.Card.Shadow];
            }, function DP2() {
              DP2.baseInitializer.call(this);
            }, /** @lends _.components.Card.Shadow.DP2.prototype */ {
              toString: function () {
                return 'mdl-shadow--2dp';
              }
            }),
            DP3: Kotlin.createObject(function () {
              return [_.components.Card.Shadow];
            }, function DP3() {
              DP3.baseInitializer.call(this);
            }, /** @lends _.components.Card.Shadow.DP3.prototype */ {
              toString: function () {
                return 'mdl-shadow--3dp';
              }
            }),
            DP4: Kotlin.createObject(function () {
              return [_.components.Card.Shadow];
            }, function DP4() {
              DP4.baseInitializer.call(this);
            }, /** @lends _.components.Card.Shadow.DP4.prototype */ {
              toString: function () {
                return 'mdl-shadow--4dp';
              }
            }),
            DP6: Kotlin.createObject(function () {
              return [_.components.Card.Shadow];
            }, function DP6() {
              DP6.baseInitializer.call(this);
            }, /** @lends _.components.Card.Shadow.DP6.prototype */ {
              toString: function () {
                return 'mdl-shadow--6dp';
              }
            }),
            DP8: Kotlin.createObject(function () {
              return [_.components.Card.Shadow];
            }, function DP8() {
              DP8.baseInitializer.call(this);
            }, /** @lends _.components.Card.Shadow.DP8.prototype */ {
              toString: function () {
                return 'mdl-shadow--8dp';
              }
            }),
            DP16: Kotlin.createObject(function () {
              return [_.components.Card.Shadow];
            }, function DP16() {
              DP16.baseInitializer.call(this);
            }, /** @lends _.components.Card.Shadow.DP16.prototype */ {
              toString: function () {
                return 'mdl-shadow--16dp';
              }
            })
          };
        })
      }),
      layout: Kotlin.definePackage(null, /** @lends _.components.layout */ {
        LayoutTile: Kotlin.createTrait(null, /** @lends _.components.layout.LayoutTile.prototype */ {
          layoutTile_mr5ep$: function (cssClassId, init) {
            if (cssClassId === void 0)
              cssClassId = '';
            var layoutTitle = new _.components.layout.LayoutTitle(cssClassId);
            init.call(layoutTitle);
            this.mainElement.append(layoutTitle.mainElement);
            return layoutTitle.mainElement;
          }
        }),
        LayoutTitle: Kotlin.createClass(function () {
          return [_.components.MdlComponent];
        }, function LayoutTitle(cssClassId) {
          if (cssClassId === void 0)
            cssClassId = '';
          LayoutTitle.baseInitializer.call(this, 'span', 'mdl-layout-title', cssClassId);
          this.title$delegate = this.htmlTextPram_5ljwfj$('');
        }, /** @lends _.components.layout.LayoutTitle.prototype */ {
          title: {
            get: function () {
              return this.title$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('title'));
            },
            set: function (title_0) {
              this.title$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('title'), title_0);
            }
          }
        }),
        grid_3dgiyu$: function ($receiver, cssClassId, init) {
          if (cssClassId === void 0)
            cssClassId = '';
          var grid = new _.components.layout.Grid(cssClassId);
          init.call(grid);
          $receiver.append(grid.mainElement);
          return grid.mainElement;
        },
        Grid: Kotlin.createClass(function () {
          return [_.components.MdlComponent];
        }, function Grid(cssClassId) {
          if (cssClassId === void 0)
            cssClassId = '';
          Grid.baseInitializer.call(this, 'div', 'mdl-grid', cssClassId);
        }, /** @lends _.components.layout.Grid.prototype */ {
          cell_7pxwa0$: function (col, cssClassId, init) {
            if (cssClassId === void 0)
              cssClassId = '';
            if (!(col < 13)) {
              var message = 'column number ' + col + ' too high mdl-cell column range is 1 to 12';
              throw new Kotlin.IllegalArgumentException(message.toString());
            }
            var $receiver = document.createElement('div');
            _.classType_cjmw3z$($receiver, cssClassId + ' mdl-cell mdl-cell--' + col + '-col');
            var div = $receiver;
            init.call(div);
            this.mainElement.append(div);
          },
          cellCard_o5wj5l$: function (col, cssClassId, shadow, init) {
            if (cssClassId === void 0)
              cssClassId = '';
            if (shadow === void 0)
              shadow = _.components.Card.Shadow.DP2;
            if (!(col < 13)) {
              var message = 'column number ' + col + ' too high mdl-cell column range is 1 to 12';
              throw new Kotlin.IllegalArgumentException(message.toString());
            }
            var card = new _.components.Card(cssClassId + ' mdl-cell mdl-cell--' + col + '-col', shadow);
            init.call(card);
            this.mainElement.append(card.mainElement);
          }
        }, /** @lends _.components.layout.Grid */ {
        }),
        navigationlayout: Kotlin.definePackage(null, /** @lends _.components.layout.navigationlayout */ {
          Header: Kotlin.createClass(function () {
            return [_.components.MdlComponent];
          }, function Header(cssClassId, transparent) {
            if (cssClassId === void 0)
              cssClassId = '';
            if (transparent === void 0)
              transparent = false;
            Header.baseInitializer.call(this, 'header', transparent ? 'mdl-layout__header--transparent' : 'mdl-layout__header', cssClassId);
            this.headerRow$delegate = this.appendToMain_ckfxvk$(new _.components.layout.navigationlayout.Header.HeaderRow());
            this.title$delegate = this.htmlTextPram_5ljwfj$(void 0, this.headerRow_0.layoutTitle.mainElement);
          }, /** @lends _.components.layout.navigationlayout.Header.prototype */ {
            headerRow_0: {
              get: function () {
                return this.headerRow$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('headerRow'));
              }
            },
            title: {
              get: function () {
                return this.title$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('title'));
              },
              set: function (title_0) {
                this.title$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('title'), title_0);
              }
            }
          }, /** @lends _.components.layout.navigationlayout.Header */ {
            HeaderRow: Kotlin.createClass(function () {
              return [_.components.MdlComponent];
            }, function HeaderRow() {
              HeaderRow.baseInitializer.call(this, 'div', 'mdl-layout__header-row');
              this.layoutTitle$delegate = this.appendToMain_ckfxvk$(new _.components.layout.LayoutTitle());
            }, /** @lends _.components.layout.navigationlayout.Header.HeaderRow.prototype */ {
              layoutTitle: {
                get: function () {
                  return this.layoutTitle$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('layoutTitle'));
                }
              }
            })
          }),
          Drawer: Kotlin.createClass(function () {
            return [_.components.layout.LayoutTile, _.components.layout.navigationlayout.LayoutNav, _.components.MdlComponent];
          }, function Drawer(cssClassId) {
            if (cssClassId === void 0)
              cssClassId = '';
            Drawer.baseInitializer.call(this, 'div', 'mdl-layout__drawer', cssClassId);
          }),
          LayoutNav: Kotlin.createTrait(null, /** @lends _.components.layout.navigationlayout.LayoutNav.prototype */ {
            nav_tw8rq6$: function (cssClass, init) {
              if (cssClass === void 0)
                cssClass = '';
              var nav = new _.components.layout.navigationlayout.Nav(cssClass);
              init.call(nav);
              this.mainElement.append(nav.mainElement);
              return nav.mainElement;
            }
          }),
          Nav: Kotlin.createClass(function () {
            return [_.components.MdlComponent];
          }, function Nav(cssClassId) {
            if (cssClassId === void 0)
              cssClassId = '';
            Nav.baseInitializer.call(this, 'nav', 'mdl-navigation', cssClassId);
          }, /** @lends _.components.layout.navigationlayout.Nav.prototype */ {
            link_v60lnq$: function (init) {
              var link = new _.components.layout.navigationlayout.Nav.Link();
              init.call(link);
              this.mainElement.append(link.mainElement);
              if (link.materialIcons.length > 0)
                link.mainElement.append(_.materialIcon_61zpoe$(link.materialIcons));
              link.mainElement.append(document.createTextNode(link.text));
            }
          }, /** @lends _.components.layout.navigationlayout.Nav */ {
            Link: Kotlin.createClass(function () {
              return [_.components.MdlComponent];
            }, function Link$(cssClassId) {
              if (cssClassId === void 0)
                cssClassId = '';
              Link$.baseInitializer.call(this, 'a', 'mdl-navigation__link', cssClassId);
              this.href$delegate = this.htmlPram_2rdptt$();
              this.materialIcons = '';
              this.text = '';
            }, /** @lends _.components.layout.navigationlayout.Nav.Link.prototype */ {
              href: {
                get: function () {
                  return this.href$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('href'));
                },
                set: function (href_0) {
                  this.href$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('href'), href_0);
                }
              },
              onClick_qshda6$: function (doOn) {
                Kotlin.kotlin.dom.onClick_g2lu80$(this.mainElement, void 0, _.components.layout.navigationlayout.Nav.Link.onClick_qshda6$f(doOn));
              }
            }, /** @lends _.components.layout.navigationlayout.Nav.Link */ {
              onClick_qshda6$f: function (closure$doOn) {
                return function (it) {
                  closure$doOn();
                };
              }
            })
          }),
          content_kox9e4$: function (title, cssClassId, body) {
            if (cssClassId === void 0)
              cssClassId = '';
            return new _.components.layout.navigationlayout.Content(title, cssClassId, body);
          },
          Content: Kotlin.createClass(function () {
            return [_.components.MdlComponent];
          }, function Content(title, cssClassId, body) {
            if (cssClassId === void 0)
              cssClassId = '';
            Content.baseInitializer.call(this, 'div', 'mdl-layout__content', cssClassId);
            this.title = title;
            body.call(this.mainElement);
          }),
          MdlContent: Kotlin.createTrait(null),
          Layout: Kotlin.createClass(function () {
            return [_.components.MdlComponent];
          }, function Layout(content, cssClassId) {
            if (cssClassId === void 0)
              cssClassId = '';
            Layout.baseInitializer.call(this, 'div', 'mdl-layout mdl-js-layout', cssClassId);
            this.content_4ou57w$_0 = content;
            this.header = null;
          }, /** @lends _.components.layout.navigationlayout.Layout.prototype */ {
            content: {
              get: function () {
                return this.content_4ou57w$_0;
              },
              set: function (value) {
                var tmp$0;
                this.content_4ou57w$_0.content.mainElement.replaceWith(value.content.mainElement);
                this.content_4ou57w$_0 = value;
                var tmp$1;
                if ((tmp$0 = this.header) != null) {
                  var block$result;
                  tmp$0.title = this.content_4ou57w$_0.content.title;
                  tmp$1 = block$result;
                }
                 else
                  tmp$1 = null;
                tmp$1;
              }
            },
            header_x87xcg$: function (cssClassId, fixed, transparent, init) {
              var tmp$0, tmp$1;
              if (cssClassId === void 0)
                cssClassId = '';
              if (fixed === void 0)
                fixed = true;
              if (transparent === void 0)
                transparent = false;
              var header = new _.components.layout.navigationlayout.Header(cssClassId, transparent);
              init.call(header);
              if (fixed)
                this.mainElement.setAttribute('class', (tmp$1 = (tmp$0 = this.mainElement.getAttribute('class')) != null ? tmp$0 + ' mdl-layout--fixed-header' : null) != null ? tmp$1 : Kotlin.throwNPE());
              header.title = this.content.content.title;
              this.mainElement.append(header.mainElement);
              this.header = header;
            },
            drawer_4qpuev$: function (cssClass, fixed, init) {
              var tmp$0, tmp$1;
              if (cssClass === void 0)
                cssClass = '';
              if (fixed === void 0)
                fixed = true;
              var drawer = new _.components.layout.navigationlayout.Drawer(cssClass);
              init.call(drawer);
              if (fixed)
                this.mainElement.setAttribute('class', (tmp$1 = (tmp$0 = this.mainElement.getAttribute('class')) != null ? tmp$0 + ' mdl-layout--fixed-drawer' : null) != null ? tmp$1 : Kotlin.throwNPE());
              this.mainElement.append(drawer.mainElement);
            }
          }, /** @lends _.components.layout.navigationlayout.Layout */ {
          })
        })
      })
    }),
    samplesite: Kotlin.definePackage(null, /** @lends _.samplesite */ {
      f: function () {
      },
      f_3: function (this$) {
        return function () {
          this$.content = _.samplesite.pages.About;
        };
      },
      f_4: function (this$) {
        return function () {
          this.text = 'About';
          this.materialIcons = 'account_circle';
          this.onClick_qshda6$(_.samplesite.f_3(this$));
        };
      },
      f_5: function () {
        this.text = 'Blog';
        this.materialIcons = 'book';
        this.href = 'https://medium.com/lewisrhine';
      },
      f_6: function () {
        this.text = 'Projects';
        this.materialIcons = 'build';
        this.href = 'https://github.com/lewisrhine';
      },
      f_8: function () {
        this.text = 'Twitter';
        this.href = 'https://twitter.com/lewisrhine';
        var tmp$0 = this.mainElement;
        var $receiver = document.createElement('i');
        $receiver.setAttribute('class', 'material-icons fa fa-twitter');
        tmp$0.append($receiver);
      },
      f_10: function () {
        this.text = 'Instagram';
        this.href = 'https://www.instagram.com/lewisrhine';
        var tmp$0 = this.mainElement;
        var $receiver = document.createElement('i');
        $receiver.setAttribute('class', 'material-icons fa fa-instagram');
        tmp$0.append($receiver);
      },
      f_12: function () {
        this.text = 'LinkedIn';
        this.href = 'https://www.linkedin.com/in/lewisrhine';
        var tmp$0 = this.mainElement;
        var $receiver = document.createElement('i');
        $receiver.setAttribute('class', 'material-icons fa fa-linkedin');
        tmp$0.append($receiver);
      },
      f_13: function () {
        this.text = 'email';
        this.href = 'mailto:lewisrhine@gmail.com';
        this.materialIcons = 'email';
      },
      f_14: function (this$) {
        return function () {
          this.link_v60lnq$(_.samplesite.f_4(this$));
          this.link_v60lnq$(_.samplesite.f_5);
          this.link_v60lnq$(_.samplesite.f_6);
          this.link_v60lnq$(_.samplesite.f_8);
          this.link_v60lnq$(_.samplesite.f_10);
          this.link_v60lnq$(_.samplesite.f_12);
          this.link_v60lnq$(_.samplesite.f_13);
        };
      },
      f_15: function (this$) {
        return function () {
          var $receiver = this.mainElement;
          var classId = 'drawer-header ' + new _.MdlColor.Background.blueGrey(_.Shade.s300);
          var $receiver_0 = document.createElement('header');
          _.classType_cjmw3z$($receiver_0, classId);
          var header = $receiver_0;
          var img = new _.Img('avatar');
          img.src = 'images/roundprofile.png';
          header.append(img.mainElement);
          img.mainElement;
          var b = document.createElement('b');
          b.textContent = 'Lewis Rhine';
          header.append(b);
          header.append(document.createTextNode('Android Developer'));
          $receiver.append(header);
          this.nav_tw8rq6$('navigation', _.samplesite.f_14(this$));
        };
      },
      f_16: function () {
        this.header_x87xcg$(void 0, void 0, void 0, _.samplesite.f);
        this.drawer_4qpuev$('drawer', void 0, _.samplesite.f_15(this));
      },
      main_kand9s$f: function () {
        this.navigationLayout_5xale7$(_.samplesite.pages.About, 'layout', _.samplesite.f_16);
      },
      main_kand9s$: function (args) {
        var mdlApp = _.mdlApp_ha0p99$(_.samplesite.main_kand9s$f);
      },
      pages: Kotlin.definePackage(null, /** @lends _.samplesite.pages */ {
        Projects: Kotlin.createObject(function () {
          return [_.components.layout.navigationlayout.MdlContent];
        }, function Projects() {
          this.content_bvzewp$_0 = _.components.layout.navigationlayout.content_kox9e4$('Projects', void 0, _.samplesite.pages.Projects.content$f);
        }, /** @lends _.samplesite.pages.Projects.prototype */ {
          content: {
            get: function () {
              return this.content_bvzewp$_0;
            }
          }
        }, /** @lends _.samplesite.pages.Projects */ {
          content$f: function () {
          }
        }),
        About: Kotlin.createObject(function () {
          return [_.components.layout.navigationlayout.MdlContent];
        }, function About() {
          this.content_3d0si4$_0 = _.components.layout.navigationlayout.content_kox9e4$('About', void 0, _.samplesite.pages.About.content$f);
        }, /** @lends _.samplesite.pages.About.prototype */ {
          content: {
            get: function () {
              return this.content_3d0si4$_0;
            }
          }
        }, /** @lends _.samplesite.pages.About */ {
          f: function () {
          },
          f_0: function () {
            this.title = 'About me';
            this.supportingText = "Completely self-taught, I began my love for writing code when I was you kid and found out about QBasic on the family computer. In my day to day life, I enjoy keeping up with new developments within the technology and android community. I am very passionate about clean thought out architecture in the code I write. And believe strongly in testing as much as possible. Even on Android where it's not the easiest to accomplish.";
          },
          f_1: function () {
          },
          f_2: function () {
          },
          f_3: function () {
            this.src = 'images/java-logo.png';
            this.text = 'Java';
          },
          f_4: function () {
            this.src = 'images/kotlin-logo.png';
            this.text = 'Kotlin';
          },
          f_5: function () {
            this.src = 'images/android-logo.png';
            this.text = 'Android Native';
          },
          f_6: function () {
            this.src = 'images/rxjava-logo.png';
            this.text = 'RxJava';
          },
          f_7: function () {
            this.src = 'images/javascript-logo.png';
            this.text = 'JavaScript';
          },
          f_8: function () {
            this.src = 'images/react-logo.png';
            this.text = 'React Native';
          },
          f_9: function () {
            this.src = 'images/unity-logo.png';
            this.text = 'Unity3D';
          },
          f_10: function () {
            this.text = 'Junit';
          },
          f_11: function () {
            this.src = 'images/mockito-logo.png';
            this.text = 'Mockito';
          },
          f_12: function () {
            _.components.chip_pcugjt$(this, void 0, true, _.samplesite.pages.About.f_3);
            _.components.chip_pcugjt$(this, void 0, true, _.samplesite.pages.About.f_4);
            _.components.chip_pcugjt$(this, void 0, true, _.samplesite.pages.About.f_5);
            _.components.chip_pcugjt$(this, void 0, true, _.samplesite.pages.About.f_6);
            _.components.chip_pcugjt$(this, void 0, true, _.samplesite.pages.About.f_7);
            _.components.chip_pcugjt$(this, void 0, true, _.samplesite.pages.About.f_8);
            _.components.chip_pcugjt$(this, void 0, true, _.samplesite.pages.About.f_9);
            _.components.chip_pcugjt$(this, void 0, void 0, _.samplesite.pages.About.f_10);
            _.components.chip_pcugjt$(this, void 0, true, _.samplesite.pages.About.f_11);
          },
          f_13: function () {
          },
          f_15: function () {
            this.size_vux9f0$();
            this.title = 'Rithmio';
            this.supportingText = 'Mar 2016 \u2014 present';
            var $receiver = this.mainElement;
            var cssClassId = void 0;
            cssClassId = '';
            var list = new _.components.List(cssClassId);
            list.item_ccvxaz$(new _.components.ListIem('-At Rithmio I Introduced new technologies like Kotlin and RxJava which have helped to make the team faster and more efficient.'));
            list.item_ccvxaz$(new _.components.ListIem('-Rithmio EDGE: I designed a new architecture based on Flux style circular data streams that made the code base more testable and stable.'));
            list.item_ccvxaz$(new _.components.ListIem('-Cadence Counter: I built a prototype app from the ground up that had a strict two-week window of completion. I was able to complete it in only a week giving the project an extra week for testing. '));
            _.plus_fpnek0$($receiver, list.mainElement);
            list.mainElement;
          },
          f_17: function () {
            this.size_vux9f0$();
            this.title = 'MeetBall';
            this.supportingText = 'Jun 2015 \u2014 Mar 2016';
            var $receiver = this.mainElement;
            var cssClassId = void 0;
            cssClassId = '';
            var list = new _.components.List(cssClassId);
            list.item_ccvxaz$(new _.components.ListIem('-At MeetBall I was the sole Android developer took over code base from a contractor and quickly moved the code a more structured testable state.'));
            list.item_ccvxaz$(new _.components.ListIem('-Integrated Beacon awareness into the app using the Radius Networks SDK'));
            _.plus_fpnek0$($receiver, list.mainElement);
            list.mainElement;
          },
          f_19: function () {
            this.title = 'Tinker Entertainment';
            this.supportingText = 'Sep 2014 \u2014 Nov 2014';
            var $receiver = this.mainElement;
            var cssClassId = void 0;
            cssClassId = '';
            var list = new _.components.List(cssClassId);
            list.item_ccvxaz$(new _.components.ListIem('While defunct, I picked up this project for my friend\u2019s new company venture when his original developer dropped out. With the game\u2019s code base written in C# and using the Unity3D framework, I quickly adapted myself to the language and provided an initial product release.'));
            _.plus_fpnek0$($receiver, list.mainElement);
            list.mainElement;
          },
          f_20: function () {
            this.cell_7pxwa0$(3, void 0, _.samplesite.pages.About.f);
            this.cellCard_o5wj5l$(6, void 0, void 0, _.samplesite.pages.About.f_0);
            this.cell_7pxwa0$(3, void 0, _.samplesite.pages.About.f_1);
            this.cell_7pxwa0$(1, void 0, _.samplesite.pages.About.f_2);
            this.cell_7pxwa0$(10, void 0, _.samplesite.pages.About.f_12);
            this.cell_7pxwa0$(1, void 0, _.samplesite.pages.About.f_13);
            this.cellCard_o5wj5l$(4, void 0, void 0, _.samplesite.pages.About.f_15);
            this.cellCard_o5wj5l$(4, void 0, void 0, _.samplesite.pages.About.f_17);
            this.cellCard_o5wj5l$(4, void 0, void 0, _.samplesite.pages.About.f_19);
          },
          content$f: function () {
            this.setAttribute('style', " background: url('images/whoiam.jpg') center / cover; filter: alpha(opacity=60); padding: 10px;");
            _.components.layout.grid_3dgiyu$(this, void 0, _.samplesite.pages.About.f_20);
          }
        })
      })
    })
  });
  Kotlin.defineModule('KMDL', _);
  _.samplesite.main_kand9s$([]);
  return _;
}(kotlin);
