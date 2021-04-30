s = "35453"
i = 0
j = len(s)-1
while(i <= j):
    # s1 = s[:i+1]
    # print(s1)
    s2 = s[j::-1]
    print(s2)
    # s3 = s[i:j]
    # print(s2+s3+s1)
    i += 1
    j -= 1
