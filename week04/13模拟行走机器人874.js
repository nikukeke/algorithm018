// 在leetcode上找了一个比较详细的
var robotSim = function (commands, obstacles) {
    // 机器人行走方向
    // 存储X轴方向以及行走的步数，1表示向X轴正方向走一步，-1表示X轴负方向走一步
    const directionX = [0, 1, 0, -1];
    // 存储Y轴方向，1表示Y轴正方向走一步，-1表示Y轴负方向走一步
    const directionY = [1, 0, -1, 0];
    // 缓存方向数组的长度，用于确定转向操作后取余
    const directionLength = directionX.length;
    // 用于表示当前的前进方向，是directionX和directionY的索引
    // 例如direction为0，选中directionX[0]为0，directionY[0]为1
    // 表示当前行走方向向是Y轴正向，即向北
    let direction = 0;

    // 机器人当前位置坐标
    let x = 0;
    let y = 0;

    // 最大欧氏距离的平方
    let maxDistance = 0;

    // 由于每走一步，需要判断是否遇到任何一个障碍点，因此使用Set保存所有障碍点，用于快速判断
    // 如果要走的点坐标与障碍物坐标重合，即为遇到障碍物
    let obstacleSet = new Set(obstacles.map((obstacle) => obstacle.toString()));

    // 遍历每个命令，按照命令指导机器人行动
    for (const command of commands) {
        if (command === -2) {
            // 机器人向左旋转90度，进行取余操作，避免索引超出数组长度
            direction = (direction + 3) % directionLength;
        } else if (command === -1) {
            // 机器人向右旋转90度
            direction = (direction + 1) % directionLength;
        } else {
            // 向前移动时，每次移动一步，便于判断是否移动到障碍点
            for (let i = 0; i < command; i++) {
                // 计算新的X轴和Y轴坐标，需要在判断是否与障碍物从何后，再决定是否行走
                // 根据direction索引，选取方向数组中的相应方向的步数，确定下一个点的坐标
                const newX = x + directionX[direction];
                const newY = y + directionY[direction];
                // 计算用于对比是否障碍点的key
                const newPointKey = `${newX},${newY}`;

                // 如果新坐标存在与Set中，表示当前坐标与障碍物重合，不可以继续行走
                if (obstacleSet.has(newPointKey)) {
                    // 退出循环，即为终止行走，即停留在障碍物之前的点上
                    // 由于上一步行走时，欧式距离的平方已经计算过，在此无需计算
                    break;
                } else {
                    // 将机器人行走到新坐标
                    x = newX;
                    y = newY;
                    // 计算当前欧式距离的平方
                    const distance = x * x + y * y;
                    // 计算最大欧氏距离的平方
                    maxDistance = Math.max(distance, maxDistance);
                }
            }
        }
    }

    return maxDistance;
};