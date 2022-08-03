function sqInRect(lng, wdth) {
    if (lng != wdth) {
        var arr = []
        var area = {
            l1: Math.max(lng, wdth),
            l2: Math.min(lng, wdth)
        };
        while (area.l1 != 0 && area.l2 != 0) {
            if (area.l1 > area.l2) {
                arr.push(area.l2);
                area.l1 -= area.l2;
            } else {
                arr.push(area.l1);
                area.l2 -= area.l1;
            }
        }
        return arr;
    } else {
        return null;
    }
}