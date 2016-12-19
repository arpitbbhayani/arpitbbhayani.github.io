---
categories: leetcode
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question construct-binary-tree-from-inorder-and-postorder-traversal
    on leetcode
  tags:
  - solution
  - source code
  - programming
  - leetcode
  - construct-binary-tree-from-inorder-and-postorder-traversal Solution
tags:
- competitive-programming
- programming
title: LEETCODE construct-binary-tree-from-inorder-and-postorder-traversal Solution
---
The correct, optimal and working solution for programming question construct-binary-tree-from-inorder-and-postorder-traversal on leetcode

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
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

    int postindex = 0;
    
int getindex(vector<int> &in, int rootdata) {
	for( int i = 0 ; i < in.size() ; i++ ) {
            if( in[i] == rootdata ) {
                return i;
            }
        }
        return -1;
}

void build(TreeNode ** root, vector<int> &in, int start, int end, vector<int> &post) {
        
        if( start > end || postindex < 0) {
			*root = NULL;
            	return;
        }

        int rootdata = post[postindex--];
        
        (*root) = new TreeNode(rootdata);
        int mid = getindex(in,rootdata);

		//cout << "root = " << rootdata << endl;
		//cout << "start = " << start << " and end = " << end << " and mid = " << mid << endl;
        
        build(&((*root)->right), in, mid+1, end, post);
        build(&((*root)->left), in, start, mid-1, post);
        
}

void _build( TreeNode ** root, vector<int> &in, vector<int> &post ) {
        postindex = post.size()-1;
        build(root,in,0,in.size()-1,post);
}

TreeNode *buildTree(vector<int> &inorder, vector<int> &postorder) {
       
       if( inorder.size() == 0 || postorder.size() == 0 ) {
           return NULL;
       }
       
       TreeNode * root;
       _build(&root, inorder,postorder);
       return root;
}
};

{% endhighlight %}
</div>
