export function DefaultBar() {
    return {
        title: {
            text: 'Bar Chart', 
            left: 'center',
            top: '2%'
        }, 
        grid: {
            top: '15%',
            bottom: '12%'
        },
        tooltip: {
            trigger: 'axis', 
            axisPointer: { type: 'shadow' }
        }, 
        xAxis: {
            type: 'category', 
            axisTick: { show: false }, 
            axisLabel: { show: true }, 
            splitLine: { show: false }, 
            data: ['a', 'b', 'c', 'd', 'e']
        }, 
        yAxis: {
            type: 'value', 
            axisTick: { show: false }, 
            axisLabel: { show: false }, 
            splitLine: { show: false }, 
        }, 
        series: [{
            type: 'bar', 
            data: [1, 3, 2, 4, 1], 
            emphasis: { focus: 'series' }, 
            itemStyle: { color: '#91cc75' }, 
            universalTransition: true,
            animationDurationUpdate: 1000
        }]
    }
}
export function DefaultLine() {
    return {
        title: {
            text: 'Line Chart', 
            left: 'center',
            top: '2%'
        }, 
        grid: {
            top: '15%',
            bottom: '12%'
        },
        tooltip: {
            trigger: 'axis', 
            axisPointer: { type: 'shadow' }
        }, 
        xAxis: {
            type: 'category', 
            axisTick: { show: false }, 
            axisLabel: { show: true }, 
            splitLine: { show: false }, 
            data: ['a', 'b', 'c', 'd', 'e']
        }, 
        yAxis: {
            type: 'value', 
            axisTick: { show: false }, 
            axisLabel: { show: false }, 
            splitLine: { show: false }, 
        }, 
        series: [{
            type: 'line', 
            data: [1, 3, 2, 4, 1], 
            itemStyle: { color: '#91cc75' },
            areaStyle: {}, 
            universalTransition: true,
            animationDurationUpdate: 1000
        }]
    }
}
export function DefaultPie() {
    return {
        title: {
            text: 'Pie Chart', 
            left: 'center',
            top: '2%'
        }, 
        grid: {
            top: '15%',
            bottom: '12%'
        },
        tooltip: { trigger: 'axis' }, 
        series: [{
            type: 'pie', 
            data: [
                {'name': 'aaa', value: 3, itemStyle: {}}, 
                {'name': 'bbb', value: 2, itemStyle: {}}, 
                {'name': 'ccc', value: 5, itemStyle: {}}, 
                {'name': 'ddd', value: 1, itemStyle: {}}, 
                {'name': 'eee', value: 4, itemStyle: {}}, 
            ], 
            radius: [0, 50], 
            roseType: false, 
            label: { show: false }, 
            emphasis: {
                itemStyle: {
                    shadowBlur: 10, 
                    shadowOffsetX: 0, 
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }, 
            universalTransition: true,
            animationDurationUpdate: 1000
        }]
    }
}
export function DefaultTableColumn() {
    return [{
        prop: 'id', 
        lable: 'ID'
    }, {
        prop: 'name', 
        lable: '??????'
    }, {
        prop: 'tel', 
        lable: '??????'
    }]
}
export function DefaultFilterData() {
    return [{
        lable: '??????', 
        type: 'input', 
        model: 'name'
    }, {
        lable: '??????', 
        type: 'select', 
        model: 'type'
    }]
    
}
export function DefaultNumberData() {
    return [{
        title: '?????????', 
        iconClass: 'fa-user', 
        iconColor: '#4680d6', 
        prop: 'userNum'
    }, {
        title: '?????????', 
        iconClass: 'fa-calculator', 
        iconColor: '#a3d685', 
        prop: 'orderNum'
    }]
}