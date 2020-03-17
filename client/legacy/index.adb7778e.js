import { _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, c as _getPrototypeOf, i as init, s as safe_not_equal, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, o as onMount, v as validate_slots, f as space, g as element, t as text, q as query_selector_all, h as detach_dev, j as claim_space, k as claim_element, l as children, m as claim_text, n as attr_dev, p as add_location, r as set_style, u as insert_dev, w as append_dev, x as listen_dev, y as _slicedToArray, z as set_data_dev, A as noop, B as _asyncToGenerator, C as _regeneratorRuntime, D as globals } from './client.c72f6155.js';

var document_1 = globals.document;
var file = "src/routes/index.svelte";

function create_fragment(ctx) {
  var t0;
  var div5;
  var div2;
  var div0;
  var h20;
  var t1;
  var t2;
  var a0;
  var t3;
  var t4;
  var a1;
  var t5;
  var t6;
  var div1;
  var h21;
  var t7;
  var t8;
  var a2;
  var t9;
  var t10;
  var div4;
  var h1;
  var t11;
  var t12;
  var div3;
  var p0;
  var t13;
  var t14;
  var p1;
  var span0;
  var t15;
  var t16;
  var span1;
  var t17;
  var t18;
  var span2;
  var t19_value =
  /*dataTypes*/
  ctx[2][
  /*dataTypeIndex*/
  ctx[0]] + "";
  var t19;
  var t20;
  var t21;
  var p2;
  var t22;
  var t23;
  var p3;
  var t24;
  var span3;
  var t25;
  var t26;
  var span4;
  var t27;
  var t28;
  var span5;
  var t29;
  var t30;
  var span6;
  var t31;
  var t32;
  var p4;
  var t33;
  var a3;
  var t34;
  var dispose;
  var block = {
    c: function create() {
      t0 = space();
      div5 = element("div");
      div2 = element("div");
      div0 = element("div");
      h20 = element("h2");
      t1 = text("Latest Projects");
      t2 = space();
      a0 = element("a");
      t3 = text("Areo Browser");
      t4 = space();
      a1 = element("a");
      t5 = text("Juno Observer");
      t6 = space();
      div1 = element("div");
      h21 = element("h2");
      t7 = text("Latest Articles");
      t8 = space();
      a2 = element("a");
      t9 = text("Hello Motivation");
      t10 = space();
      div4 = element("div");
      h1 = element("h1");
      t11 = text("Hello 👋");
      t12 = space();
      div3 = element("div");
      p0 = element("p");
      t13 = text("I'm Matt.");
      t14 = space();
      p1 = element("p");
      span0 = element("span");
      t15 = text("I'm Matt.");
      t16 = text(" And I can help you do\n        ");
      span1 = element("span");
      t17 = text("awesome");
      t18 = text("\n        things with your\n        ");
      span2 = element("span");
      t19 = text(t19_value);
      t20 = text("\n        data.");
      t21 = space();
      p2 = element("p");
      t22 = text("I love making data more, and making it flow between apps in occasionally odd but incredibly useful ways.");
      t23 = space();
      p3 = element("p");
      t24 = text("You can check out some of my personal projects, or read some of my\n        ");
      span3 = element("span");
      t25 = text("(hopefully soon-to-be numerous)");
      t26 = text("\n        short articles by clicking the links\n        ");
      span4 = element("span");
      t27 = text("up the top over there");
      t28 = space();
      span5 = element("span");
      t29 = text("in the dropdown menu up there");
      t30 = space();
      span6 = element("span");
      t31 = text("👆");
      t32 = space();
      p4 = element("p");
      t33 = text("Or if you've got a project in mind,\n        ");
      a3 = element("a");
      t34 = text("why not say hello?");
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-1wfbuu\"]", document_1.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      div5 = claim_element(nodes, "DIV", {
        class: true
      });
      var div5_nodes = children(div5);
      div2 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      h20 = claim_element(div0_nodes, "H2", {
        class: true
      });
      var h20_nodes = children(h20);
      t1 = claim_text(h20_nodes, "Latest Projects");
      h20_nodes.forEach(detach_dev);
      t2 = claim_space(div0_nodes);
      a0 = claim_element(div0_nodes, "A", {
        href: true,
        class: true
      });
      var a0_nodes = children(a0);
      t3 = claim_text(a0_nodes, "Areo Browser");
      a0_nodes.forEach(detach_dev);
      t4 = claim_space(div0_nodes);
      a1 = claim_element(div0_nodes, "A", {
        href: true,
        class: true
      });
      var a1_nodes = children(a1);
      t5 = claim_text(a1_nodes, "Juno Observer");
      a1_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      t6 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      h21 = claim_element(div1_nodes, "H2", {
        class: true
      });
      var h21_nodes = children(h21);
      t7 = claim_text(h21_nodes, "Latest Articles");
      h21_nodes.forEach(detach_dev);
      t8 = claim_space(div1_nodes);
      a2 = claim_element(div1_nodes, "A", {
        href: true,
        class: true
      });
      var a2_nodes = children(a2);
      t9 = claim_text(a2_nodes, "Hello Motivation");
      a2_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      t10 = claim_space(div5_nodes);
      div4 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);
      h1 = claim_element(div4_nodes, "H1", {
        class: true
      });
      var h1_nodes = children(h1);
      t11 = claim_text(h1_nodes, "Hello 👋");
      h1_nodes.forEach(detach_dev);
      t12 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      p0 = claim_element(div3_nodes, "P", {
        class: true
      });
      var p0_nodes = children(p0);
      t13 = claim_text(p0_nodes, "I'm Matt.");
      p0_nodes.forEach(detach_dev);
      t14 = claim_space(div3_nodes);
      p1 = claim_element(div3_nodes, "P", {
        class: true
      });
      var p1_nodes = children(p1);
      span0 = claim_element(p1_nodes, "SPAN", {
        class: true
      });
      var span0_nodes = children(span0);
      t15 = claim_text(span0_nodes, "I'm Matt.");
      span0_nodes.forEach(detach_dev);
      t16 = claim_text(p1_nodes, " And I can help you do\n        ");
      span1 = claim_element(p1_nodes, "SPAN", {
        class: true
      });
      var span1_nodes = children(span1);
      t17 = claim_text(span1_nodes, "awesome");
      span1_nodes.forEach(detach_dev);
      t18 = claim_text(p1_nodes, "\n        things with your\n        ");
      span2 = claim_element(p1_nodes, "SPAN", {
        class: true
      });
      var span2_nodes = children(span2);
      t19 = claim_text(span2_nodes, t19_value);
      span2_nodes.forEach(detach_dev);
      t20 = claim_text(p1_nodes, "\n        data.");
      p1_nodes.forEach(detach_dev);
      t21 = claim_space(div3_nodes);
      p2 = claim_element(div3_nodes, "P", {
        class: true
      });
      var p2_nodes = children(p2);
      t22 = claim_text(p2_nodes, "I love making data more, and making it flow between apps in occasionally odd but incredibly useful ways.");
      p2_nodes.forEach(detach_dev);
      t23 = claim_space(div3_nodes);
      p3 = claim_element(div3_nodes, "P", {
        class: true
      });
      var p3_nodes = children(p3);
      t24 = claim_text(p3_nodes, "You can check out some of my personal projects, or read some of my\n        ");
      span3 = claim_element(p3_nodes, "SPAN", {
        class: true
      });
      var span3_nodes = children(span3);
      t25 = claim_text(span3_nodes, "(hopefully soon-to-be numerous)");
      span3_nodes.forEach(detach_dev);
      t26 = claim_text(p3_nodes, "\n        short articles by clicking the links\n        ");
      span4 = claim_element(p3_nodes, "SPAN", {
        class: true
      });
      var span4_nodes = children(span4);
      t27 = claim_text(span4_nodes, "up the top over there");
      span4_nodes.forEach(detach_dev);
      t28 = claim_space(p3_nodes);
      span5 = claim_element(p3_nodes, "SPAN", {
        class: true
      });
      var span5_nodes = children(span5);
      t29 = claim_text(span5_nodes, "in the dropdown menu up there");
      span5_nodes.forEach(detach_dev);
      t30 = claim_space(p3_nodes);
      span6 = claim_element(p3_nodes, "SPAN", {
        id: true,
        style: true
      });
      var span6_nodes = children(span6);
      t31 = claim_text(span6_nodes, "👆");
      span6_nodes.forEach(detach_dev);
      p3_nodes.forEach(detach_dev);
      t32 = claim_space(div3_nodes);
      p4 = claim_element(div3_nodes, "P", {
        class: true
      });
      var p4_nodes = children(p4);
      t33 = claim_text(p4_nodes, "Or if you've got a project in mind,\n        ");
      a3 = claim_element(p4_nodes, "A", {
        class: true,
        href: true
      });
      var a3_nodes = children(a3);
      t34 = claim_text(a3_nodes, "why not say hello?");
      a3_nodes.forEach(detach_dev);
      p4_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document_1.title = "Matt Brealey";
      attr_dev(h20, "class", "text-pink-600 font-semibold");
      add_location(h20, file, 67, 6, 2324);
      attr_dev(a0, "href", "#");
      attr_dev(a0, "class", "hover:text-pink-500 hover:underline mt-2");
      add_location(a0, file, 68, 6, 2391);
      attr_dev(a1, "href", "#");
      attr_dev(a1, "class", "hover:text-pink-500 hover:underline");
      add_location(a1, file, 69, 6, 2475);
      attr_dev(div0, "class", "flex flex-col");
      add_location(div0, file, 66, 4, 2290);
      attr_dev(h21, "class", "text-pink-600 font-semibold");
      add_location(h21, file, 72, 6, 2603);
      attr_dev(a2, "href", "#");
      attr_dev(a2, "class", "hover:text-pink-500 hover:underline mt-2");
      add_location(a2, file, 73, 6, 2670);
      attr_dev(div1, "class", "flex flex-col mt-8");
      add_location(div1, file, 71, 4, 2564);
      attr_dev(div2, "class", "w-1/5 mr-6 text-sm hidden sm:block");
      add_location(div2, file, 65, 2, 2237);
      attr_dev(h1, "class", "text-3xl text-pink-600 font-thin sm:leading-6");
      add_location(h1, file, 77, 4, 2819);
      attr_dev(p0, "class", "pt-4 sm:hidden");
      add_location(p0, file, 79, 6, 2928);
      attr_dev(span0, "class", "hidden sm:inline-block");
      add_location(span0, file, 81, 8, 2999);
      attr_dev(span1, "class", "font-semibold");
      add_location(span1, file, 82, 8, 3083);
      attr_dev(span2, "class", "font-semibold text-pink-600");
      add_location(span2, file, 84, 8, 3159);
      attr_dev(p1, "class", "pt-4");
      add_location(p1, file, 80, 6, 2974);
      attr_dev(p2, "class", "pt-4");
      add_location(p2, file, 87, 6, 3266);
      attr_dev(span3, "class", "text-gray-700 italic");
      add_location(span3, file, 92, 8, 3513);
      attr_dev(span4, "class", "hidden sm:inline-block");
      add_location(span4, file, 94, 8, 3640);
      attr_dev(span5, "class", "sm:hidden");
      add_location(span5, file, 97, 8, 3734);
      attr_dev(span6, "id", "pointingHand");
      set_style(span6, "display", "inline-block");
      set_style(span6, "transform", "rotate(" +
      /*handRotation*/
      ctx[1] + "deg)");
      add_location(span6, file, 98, 8, 3803);
      attr_dev(p3, "class", "pt-4");
      add_location(p3, file, 90, 6, 3413);
      attr_dev(a3, "class", "font-semibold hover:underline text-pink-600 sm:text-pink-700 hover:text-pink-600");
      attr_dev(a3, "href", "mailto:hello@mattbrealey.com");
      add_location(a3, file, 104, 8, 4014);
      attr_dev(p4, "class", "pt-4");
      add_location(p4, file, 102, 6, 3945);
      attr_dev(div3, "class", "mt-2 lg:mt-6");
      add_location(div3, file, 78, 4, 2895);
      attr_dev(div4, "class", "w-auto sm:w-4/5 font-light");
      add_location(div4, file, 76, 2, 2774);
      attr_dev(div5, "class", "font-normal text-gray-900 text-base sm:text-base p-6 flex lg:p-8");
      add_location(div5, file, 64, 0, 2156);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, div5, anchor);
      append_dev(div5, div2);
      append_dev(div2, div0);
      append_dev(div0, h20);
      append_dev(h20, t1);
      append_dev(div0, t2);
      append_dev(div0, a0);
      append_dev(a0, t3);
      append_dev(div0, t4);
      append_dev(div0, a1);
      append_dev(a1, t5);
      append_dev(div2, t6);
      append_dev(div2, div1);
      append_dev(div1, h21);
      append_dev(h21, t7);
      append_dev(div1, t8);
      append_dev(div1, a2);
      append_dev(a2, t9);
      append_dev(div5, t10);
      append_dev(div5, div4);
      append_dev(div4, h1);
      append_dev(h1, t11);
      append_dev(div4, t12);
      append_dev(div4, div3);
      append_dev(div3, p0);
      append_dev(p0, t13);
      append_dev(div3, t14);
      append_dev(div3, p1);
      append_dev(p1, span0);
      append_dev(span0, t15);
      append_dev(p1, t16);
      append_dev(p1, span1);
      append_dev(span1, t17);
      append_dev(p1, t18);
      append_dev(p1, span2);
      append_dev(span2, t19);
      append_dev(p1, t20);
      append_dev(div3, t21);
      append_dev(div3, p2);
      append_dev(p2, t22);
      append_dev(div3, t23);
      append_dev(div3, p3);
      append_dev(p3, t24);
      append_dev(p3, span3);
      append_dev(span3, t25);
      append_dev(p3, t26);
      append_dev(p3, span4);
      append_dev(span4, t27);
      append_dev(p3, t28);
      append_dev(p3, span5);
      append_dev(span5, t29);
      append_dev(p3, t30);
      append_dev(p3, span6);
      append_dev(span6, t31);
      append_dev(div3, t32);
      append_dev(div3, p4);
      append_dev(p4, t33);
      append_dev(p4, a3);
      append_dev(a3, t34);
      dispose = listen_dev(window, "resize",
      /*updateHandRotation*/
      ctx[3], false, false, false);
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*dataTypeIndex*/
      1 && t19_value !== (t19_value =
      /*dataTypes*/
      ctx[2][
      /*dataTypeIndex*/
      ctx[0]] + "")) set_data_dev(t19, t19_value);

      if (dirty &
      /*handRotation*/
      2) {
        set_style(span6, "transform", "rotate(" +
        /*handRotation*/
        ctx[1] + "deg)");
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(div5);
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  var dataTypes = ["VFX", "design", "space"];
  var dataTypeIndex = 0; //Store the rotation of the pointing hand

  var handRotation = 0;
  var handElement = null;
  var projectsElement = null;
  var menuButton = null;

  function updateHandRotation() {
    //Get out if either element doesn't exist
    if (!handElement || !projectsElement) return; //Get the rects

    var handRect = handElement.getBoundingClientRect();
    var projectsRect = projectsElement.getBoundingClientRect();
    var menuRect = menuButton.getBoundingClientRect(); //Get the positions

    var handPos = {
      x: handRect.x + handRect.width / 2,
      y: handRect.y + handRect.height / 2
    };
    var projectsPos = {
      x: projectsRect.x + projectsRect.width / 2,
      y: projectsRect.y + projectsRect.height / 2
    };
    var menuPos = {
      x: menuRect.x + menuRect.width / 2,
      y: menuRect.y + menuRect.height / 2
    }; //We need to use the menu if it's visible, otherwise the projects menu item
    //Quick way to do this is just to see if the rect's width/height are 0

    var pointingAt = menuPos;

    if (menuRect.width === 0 && menuRect.height === 0) {
      pointingAt = projectsPos;
    } //Get the angle between the points


    $$invalidate(1, handRotation = Math.atan2(pointingAt.y - handPos.y, pointingAt.x - handPos.x) * 180 / Math.PI + 90);
  } //On mount, start the rotation + return a cleanup function


  onMount( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var interval;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            //Setup the timer
            interval = setInterval(function () {
              $$invalidate(0, dataTypeIndex = dataTypeIndex == dataTypes.length - 1 ? 0 : dataTypeIndex + 1);
            }, 1500); //Store the hand/projects menu elements

            handElement = document.getElementById("pointingHand");
            projectsElement = document.getElementById("projectsMenuItem");
            menuButton = document.getElementById("menuButton"); //Update the initial hand rotation

            updateHandRotation();
            return _context.abrupt("return", function () {
              //Clear the timer on unmount
              clearInterval(interval);
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Routes> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Routes", $$slots, []);

  $$self.$capture_state = function () {
    return {
      onMount: onMount,
      dataTypes: dataTypes,
      dataTypeIndex: dataTypeIndex,
      handRotation: handRotation,
      handElement: handElement,
      projectsElement: projectsElement,
      menuButton: menuButton,
      updateHandRotation: updateHandRotation
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("dataTypes" in $$props) $$invalidate(2, dataTypes = $$props.dataTypes);
    if ("dataTypeIndex" in $$props) $$invalidate(0, dataTypeIndex = $$props.dataTypeIndex);
    if ("handRotation" in $$props) $$invalidate(1, handRotation = $$props.handRotation);
    if ("handElement" in $$props) handElement = $$props.handElement;
    if ("projectsElement" in $$props) projectsElement = $$props.projectsElement;
    if ("menuButton" in $$props) menuButton = $$props.menuButton;
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [dataTypeIndex, handRotation, dataTypes, updateHandRotation];
}

var Routes = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Routes, _SvelteComponentDev);

  function Routes(options) {
    var _this;

    _classCallCheck(this, Routes);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Routes).call(this, options));
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Routes",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Routes;
}(SvelteComponentDev);

export default Routes;
