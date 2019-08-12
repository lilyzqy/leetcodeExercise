var DNode = function(key,val) {
  this.key = key;
  this.val = val;
  this.next = null;
  this.prev = null;
};

var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.length = 0;
  this.cache = {};

  // Initialize the dummy head of the cache
  this.head = new DNode(undefined,"head");
  this.head.prev = null;

  // Init the dummy tail of the cache
  this.tail = new DNode(undefined,"tail");
  this.tail.next = null;

  // Wire the head and tail together
  this.head.next = this.tail;
  this.tail.prev = this.head;
};

LRUCache.prototype.get = function(key){

  //find node
  const node = this.cache[key];

  if(node === undefined) {
    return -1;
  }

  //reset the pointers
  node.prev.next = node.next;
  node.next.prev = node.prev;
  node.prev = this.head;
  node.next = this.head.next;
  this.head.next.prev = node;
  this.head.next = node;

  //return the value
  return node.val;
};

LRUCache.prototype.put = function(key, val) {
  //find node
  let node = this.cache[key];

  if(node !== undefined) {
    node.val = val;
    node.prev.next = node.next;
    node.next.prev = node.prev;
  } else {
    node = new DNode(key,val);
    this.cache[key] = node;
    this.length++;
  }

  node.next = this.head.next;
  this.head.next.prev = node;
  node.prev = this.head;
  this.head.next = node;

  if(this.length > this.capacity) {
    const LRUNode = this.tail.prev;
    this.tail.prev = LRUNode.prev;
    LRUNode.prev.next = this.tail;
    LRUNode.next = null;
    LRUNode.prev = null;
    delete this.cache[LRUNode.key];
    this.length--;
  }
};

const a = new LRUCache(2);

a.put(2,1);
a.put(2,2);
a.get(2);
a.put(3,3);
a.get(2);
a.put(4,4);
// a.get(1);
console.log(a.cache);
