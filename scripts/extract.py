emails = []
with open('/home/arpit/Downloads/subscribers.csv') as f:
    for l in f:
        emails.append(l.split(",")[0])
print(','.join(emails[1:]))
