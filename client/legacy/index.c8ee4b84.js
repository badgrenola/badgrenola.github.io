import { _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, c as _getPrototypeOf, i as init, s as safe_not_equal, d as _assertThisInitialized, e as dispatch_dev, E as _createClass, S as SvelteComponentDev, F as validate_each_argument, v as validate_slots, g as element, t as text, k as claim_element, l as children, m as claim_text, h as detach_dev, n as attr_dev, p as add_location, u as insert_dev, w as append_dev, z as set_data_dev, f as space, q as query_selector_all, j as claim_space, y as _slicedToArray, A as noop, G as destroy_each } from './client.c72f6155.js';

var file = "src/routes/blog/index.svelte";

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[1] = list[i];
  return child_ctx;
} // (27:1) {#each posts as post}


function create_each_block(ctx) {
  var li;
  var a;
  var t_value =
  /*post*/
  ctx[1].title + "";
  var t;
  var a_href_value;
  var block = {
    c: function create() {
      li = element("li");
      a = element("a");
      t = text(t_value);
      this.h();
    },
    l: function claim(nodes) {
      li = claim_element(nodes, "LI", {});
      var li_nodes = children(li);
      a = claim_element(li_nodes, "A", {
        rel: true,
        href: true
      });
      var a_nodes = children(a);
      t = claim_text(a_nodes, t_value);
      a_nodes.forEach(detach_dev);
      li_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(a, "rel", "prefetch");
      attr_dev(a, "href", a_href_value = "blog/" +
      /*post*/
      ctx[1].slug);
      add_location(a, file, 31, 6, 984);
      add_location(li, file, 31, 2, 980);
    },
    m: function mount(target, anchor) {
      insert_dev(target, li, anchor);
      append_dev(li, a);
      append_dev(a, t);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*posts*/
      1 && t_value !== (t_value =
      /*post*/
      ctx[1].title + "")) set_data_dev(t, t_value);

      if (dirty &
      /*posts*/
      1 && a_href_value !== (a_href_value = "blog/" +
      /*post*/
      ctx[1].slug)) {
        attr_dev(a, "href", a_href_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(li);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(27:1) {#each posts as post}",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var t0;
  var h1;
  var t1;
  var t2;
  var ul;
  var each_value =
  /*posts*/
  ctx[0];
  validate_each_argument(each_value);
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  var block = {
    c: function create() {
      t0 = space();
      h1 = element("h1");
      t1 = text("Recent posts");
      t2 = space();
      ul = element("ul");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-hfp9t8\"]", document.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      h1 = claim_element(nodes, "H1", {});
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes, "Recent posts");
      h1_nodes.forEach(detach_dev);
      t2 = claim_space(nodes);
      ul = claim_element(nodes, "UL", {
        class: true
      });
      var ul_nodes = children(ul);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].l(ul_nodes);
      }

      ul_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Blog";
      add_location(h1, file, 23, 0, 711);
      attr_dev(ul, "class", "svelte-hfcvru");
      add_location(ul, file, 25, 0, 734);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, h1, anchor);
      append_dev(h1, t1);
      insert_dev(target, t2, anchor);
      insert_dev(target, ul, anchor);

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(ul, null);
      }
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*posts*/
      1) {
        each_value =
        /*posts*/
        ctx[0];
        validate_each_argument(each_value);

        var _i4;

        for (_i4 = 0; _i4 < each_value.length; _i4 += 1) {
          var child_ctx = get_each_context(ctx, each_value, _i4);

          if (each_blocks[_i4]) {
            each_blocks[_i4].p(child_ctx, dirty);
          } else {
            each_blocks[_i4] = create_each_block(child_ctx);

            each_blocks[_i4].c();

            each_blocks[_i4].m(ul, null);
          }
        }

        for (; _i4 < each_blocks.length; _i4 += 1) {
          each_blocks[_i4].d(1);
        }

        each_blocks.length = each_value.length;
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(h1);
      if (detaching) detach_dev(t2);
      if (detaching) detach_dev(ul);
      destroy_each(each_blocks, detaching);
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

function preload(_ref3) {
  var params = _ref3.params,
      query = _ref3.query;
  return this.fetch("blog.json").then(function (r) {
    return r.json();
  }).then(function (posts) {
    return {
      posts: posts
    };
  });
}

function instance($$self, $$props, $$invalidate) {
  var posts = $$props.posts;
  var writable_props = ["posts"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Blog> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Blog", $$slots, []);

  $$self.$set = function ($$props) {
    if ("posts" in $$props) $$invalidate(0, posts = $$props.posts);
  };

  $$self.$capture_state = function () {
    return {
      preload: preload,
      posts: posts
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("posts" in $$props) $$invalidate(0, posts = $$props.posts);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [posts];
}

var Blog = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Blog, _SvelteComponentDev);

  function Blog(options) {
    var _this;

    _classCallCheck(this, Blog);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Blog).call(this, options));
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      posts: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Blog",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*posts*/
    ctx[0] === undefined && !("posts" in props)) {
      console.warn("<Blog> was created without expected prop 'posts'");
    }

    return _this;
  }

  _createClass(Blog, [{
    key: "posts",
    get: function get() {
      throw new Error("<Blog>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Blog>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Blog;
}(SvelteComponentDev);

export default Blog;
export { preload };
