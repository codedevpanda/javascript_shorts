function hanoi(numDiscs, source, destination, auxiliary) {
    if (numDiscs == 1 ) {
        console.log(`Move disk 1 from ${source} to ${destination}`);
    } else {
        hanoi(numDiscs - 1, source, auxiliary, destination);
        console.log(`Move disk ${numDiscs} from ${source} to ${destination}`);
        hanoi(numDiscs - 1, auxiliary, destination, source);
    }
}

// Example with 3 disks
hanoi(3, 'A', 'C', 'B');