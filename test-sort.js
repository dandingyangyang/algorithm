/*
 * @Descripttion: 
 * @Author: yangxia
 * @Date: 2021-02-22 13:13:30
 */
function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    while(start <= end) {
        let mid = Math.floor((start + end) / 2);
        let midVal = arr[mid];
        if (midVal === target) {
            return mid;
        } else if (midVal > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
}

function shuffle(arr) {
    arr.sort((a, b) => Math.random() - 0.5);
    return arr;
}

function shuffle(arr) {
    let length = arr.length;
    let result = [];
    while(length) {
        let index = Math.floor(Math.random() * length);
        result.concat(arr.splice(index, 1));
        length--;
    }
    return result;
}

function threesum(number) {
    if(number.length < 3) {
        return []
    }
    let result = [];
    number.sort((a, b) => a - b);
    for(let i = 0; i < number.length - 2; i++) {
        if (number[i] > 0) {
            continue;
        }
        if (number[i] === number[i - 1]) {
            continue;
        }
        let j = i + 1;
        let k = numbers.length - 1;
        while(j < k && j <= number.length - 1 && k > i) {
            if (number[i] + number[j] + number[k] === 0) {
                result.push([number[i], number[j], number[k]]);
                j++;
                k--;
                while(j < k && number[j] === number[j - 1]) {
                    j++;
                }
                while(j < k && number[k] === number[k + 1]) {
                    k--;
                }
            } else if(number[i] + number[j] + number[k] > 0) {
                k--;
            } else {
                j++;
            }
        }
    }
    return result;
}

function getIntersectionNode(headA, headB) {
    if(!headA || !headB) return null;
    let curA = headA;
    let curB = headB;
    while(curA !== curB) {
        curA = curA ? curA.next : curB;
        curB = curB ? curB.next : curA;
    }
    return curA;
}

function reverseList(head) {
    if(!head || !head.next) return head;
    let current = head, pre, next;
    while(current) {
        next = current.next;
        current.next = pre;
        pre = current;
        current = next;
    }
    return pre;
}

function Merge(phead1, phead2) {
    if(!phead1) {
        return phead2;
    }
    if(!phead2) {
        return phead1;
    }
    let head,current;
    if (phead1.val < phead2.val) {
        head = current = phead1;
        phead1 = phead1.next;
    } else {
        head = current = phead2;
        phead2 = phead2.next;
    }
    while(phead1 && phead2) {
        if (phead1.val < phead2.val) {
            current.next = phead1;
            current = current.next;
            phead1 = phead1.next;
        } else {
            current.next = phead2;
            current = current.next;
            phead2 = phead2.next;
        }
    }
    if (phead1) {
        current.next = phead1;
    } else {
        current.next = phead2;
    }
    return head;
}

function hasCycle(head) {
    if(!head) return false;
    let slow = fast = head;
    while(fast && fast.next && fast !== slow) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return fast === slow;
}

function maxDepth(root) {
    if(!root) return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}

function isBalanced(root) {
    if(!root) return true;
    if(Math.abs(maxDepth(root.left) - maxDepth(root.right)) > 1) {
        return false;
    }
    return isBalanced(root.left) && isBalanced(root.right)
}

function levelOrderTraversal(root) {
    let result = [];
    if(!root) return result;
    let nodes = [root];
    while(nodes.length) {
        let node = nodes.shift();
        result.push(node.val);
        node.left && nodes.push(node.left);
        node.right && nodes.push(node.right);
    }
    return result;
}

function levelOrder(root) {
    if (!root) return [];
    let result = [];
    if(!root) return result;
    let currentLevel = [root];
    let nextLevel = [];
    let currentValue = [];
    while(currentLevel.length) {
        let node = currentLevel.shift();
        currentValue.push(node.val);
        node.left && nextLevel.push(node.left);
        node.right && nextLevel.push(node.right);

        if (!currentLevel.length) {
            currentLevel = nextLevel;
            nextLevel = [];
            result.push(currentValue);
            currentValue = [];
        }
    }
    return result;
}

var preorderTraversal = function(root) {
    if(!root) return [];
    let result = [];
    travel(root, result);
    return result;
}

function travel(root, result) {
    if(!root) return;
    result.push(root.val);
    root.left && travel(root.left, result);
    root.right && travel(root.right, result);
}

function findBottomLeftValue(root) {
    if(!root) return;
    let value = root.val;
    let maxLevel = 1;
    function dfs(root, level) {
        if(!root) return;
        if(!root.left && !root.right) {
            if (level > maxLevel) {
                value = root.val;
            }
        }
        dfs(root.left, level + 1);
        dfs(root.right, level + 1);
    }
    dfs(root, 1);
}

function trimBST(root, L, R) {
    if(!root) return root;
    if(root.val < L) {
        return trimBST(root.right, L, R);
    } 
    if(root.val < R) {
        return trimBST(root.left, L, R);
    }
    root.left = trimBST(root.left, L, R);
    root.right = trimBST(root.right, L, R);
    return root;
}

function eraseOverlapIntervals(intervals) {
    if (!intervals || !intervals.length) return 0;
    intervals.sort((a, b) => a[0] - b[0]);
    let count = 0;
    intervals.reduce((prev, item)=> {
        if (prev[1] > item [0]) {
            count++;
            return pre;
        } else {
            return item;
        }
    })
    return count;
}

function findMinArrowShots(points) {
    if (!points || !points.length) return 0;
    let count = 0;
    points.sort((a, b) => a[0] - b[0]);
    while(points.length) {
        count++;
        for(let i = 1; i < points.length; i++) {
            if (points[0][1] > points[i][0]) {
                points.splice(i, 1);
                i--;
            }
        }
        points.splice(0, 1);
    }
    return count;
}
var shortestPathBinaryMatrix = function(grid) {
    let row = grid.length;
   let col = grid[0].length;
   if(grid[0][0] === 1 || grid[row - 1][col -1] === 1) return -1;
   if(row === 1 && col === 1 && grid[0][0] === 0) return 0;
  
   let direction = [
       [-1, 0],
       [0, -1],
       [1, 0],
       [0, 1],
       [-1, -1],
       [1, -1],
       [1, 1],
       [-1, 1]
   ];
   let level = 1;
   let nodes = [[0, 0]];
   while(nodes.length) {
       let length = nodes.length;
       while(length) {
           const [x, y] = nodes.shift();
           for(let i = 0; i < direction.length; i++) {
               let newX = direction[i][0] + x;
               let newY = direction[i][1] + y;
               if (newX < 0 || newY < 0 || newX >= row || newY >= col || grid[newX][newY] === 1) {
                   continue;
               }
               if (newX === row - 1 && newY === col - 1) {
                   return level + 1;
               }
               grid[newX][newY] = 1;
               nodes.push([newX, newY]);
            }
           
           length--;
       }
       level++;
   }
   return -1;
};