/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSubPath = function(head, root) {
    if(!root)    return false
    if(issame(head, root))  return true
    return isSubPath(head, root.left) || isSubPath(head, root.right)
};

function issame(head, root){
    if(!head)   return true
    if(!root)   return false
    if(head.val != root.val)    return false
    return issame(head.next, root.left) || issame(head.next, root.right)
};
head = [1,5,8,6]
root = [1,4,5,3,2,8,6,null,5,null,null,6,4,null,null,null,null,null,null,7,null,null,null]