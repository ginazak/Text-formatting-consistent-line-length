def consistentLineLength(filename, length):
    """ Reads a given text file and returns a reformatted list of lines(strings), each filled up to the length inputted, without splitting words.
    Does not account for words longer than the given length.
    Only positive integers are valid length inputs.
    Output is a list of strings. 
    """    
    #  Source file read and text formatted as a single-spaced string    
    fin = open(filename)
    data = fin.readlines()
    source_text = [i.strip() for i in data]
    source_text = " ".join(source_text).split("  ")
    texttemp = ""
    source_text = texttemp.join(source_text)

    final_text = []
    count = 0
    #  To generate consecutive lines, each iteration starts with the maximum possible line length
    #  Position of the last possible whitespace is located and maximum filled substrings are thus generated
    while count < (len(source_text)):
        current_line = source_text[count: count + length + 1]
        last_index = current_line.rfind(" ")
        if last_index > -1:
            actual_line = current_line[0: last_index]
            final_text.append(actual_line)
        else:
            last_index = length
            final_text.append(current_line)
        count += last_index + 1
        continue
    return(final_text) 