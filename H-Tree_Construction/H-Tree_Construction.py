
print "Practice makes Perfect!"

'''
depth = 1

Only three lines

the left vertical: drawline(x - l/2.0, y - l/2.0, x - l/2.0, y + l/2.0)

        0   0
        00100   2
        0 0 0   0
          0     0
          000X000   
          0     0
          0     0
          3     4


l - is the length of sections (vertical or horizontal)
X = (x, y)
L = (x - l/2, y + l/2)
W = (x - 1/2, y - 1/2)

drawline(x - l/2, y + l/2, x - l/2, y - l/2) # the left vertical
drawline(x + l/2, y + l/2, x + l/2, y - l/2) # the right vertical
drawline(x - l/2, y, x + l/2, y) # horizontal line


What if depth is 2:

drawHtree(x - l/2, y + l/2, l / math.sqrt(2), depth - 1) for points L, W, ., .
l
length of the line segments drawn at each stage by √2.


depth = 1 NTree = 1
depth = 2 Ntree = 1 + 4 = 5
depth = 3 Ntree = 1 + 4 + 4 * 4 = 21
'''


def drawLine(x1, y1, x2, y2):
    pass
    # draws a line from (x1, y1) to (x2, y2)


def drawHtree(x, y, l, depth):
    drawline(x - l/2, y + l/2, x - l/2, y - l/2)  # the left vertical
    drawline(x + l/2, y + l/2, x + l/2, y - l/2)  # the right vertical
    drawline(x - l/2, y, x + l/2, y)  # horizontal line
    if depth > 1:
        drawHtree(x - l/2, y + l/2, l / math.sqrt(2), depth - 1)
        drawHtree(x - l/2, y - l/2, l / math.sqrt(2), depth - 1)
        drawHtree(x + l/2, y + l/2, l / math.sqrt(2), depth - 1)
        drawHtree(x - l/2, y - l/2, l / math.sqrt(2), depth - 1)
