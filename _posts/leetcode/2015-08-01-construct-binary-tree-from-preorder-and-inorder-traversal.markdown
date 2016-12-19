---
categories: leetcode
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question construct-binary-tree-from-preorder-and-inorder-traversal
    on leetcode
  tags:
  - solution
  - source code
  - programming
  - leetcode
  - construct-binary-tree-from-preorder-and-inorder-traversal Solution
tags:
- competitive-programming
- programming
title: LEETCODE construct-binary-tree-from-preorder-and-inorder-traversal Solution
---
The correct, optimal and working solution for programming question construct-binary-tree-from-preorder-and-inorder-traversal on leetcode

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
</div>
<div class="ui bottom attached active tab" data-tab="solution">
{% highlight cpp %}

/**
 * Definition for binary tree
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
public:

    int preindex = 0;

    int get_index( vector<int> &in , int data ) {
        for( int i = 0 ; i < in.size() ; i++ ) {
            if( data == in[i]) {
                return i;
            }
        }
        return -1;
    }

    void _build( TreeNode ** root, vector<int> &pre,  vector<int> &in, int start, int end ) {
        
        if( start > end ) {
            (*root) = NULL;
            return;
        }
        
        int rootdata = pre[preindex++];
        
        (*root) = new TreeNode(rootdata);
        
        int index = get_index(in,rootdata);
        _build(&((*root)->left),pre,in,start,index-1);
        _build(&((*root)->right),pre,in,index+1, end);
        
        
    }

    TreeNode *buildTree(vector<int> &preorder, vector<int> &inorder) {
        
        TreeNode *root;
        _build(&root,preorder,inorder,0,inorder.size()-1);
        return root;
        
    }
};

{% endhighlight %}
</div>
