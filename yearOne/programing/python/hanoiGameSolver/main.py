def solveTheTowerOgHanoi(discs, source, destination, aux):
    if discs == 1:
        print("Move disc 1 from peg", source, "to !w", destination)
        return!w