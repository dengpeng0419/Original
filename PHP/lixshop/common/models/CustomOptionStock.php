<?php

namespace common\models;

use Yii;
use yii\db\ActiveRecord;
use common\models\Product;

/**
 * This is the model class for table "{{%product_custom_option_stock}}".
 *
 * @property int $id
 * @property string $product_id 产品id
 * @property string $custom_option_key 产品自定义的属性key
 * @property int $stock 库存数量
 */
class CustomOptionStock extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return '{{%product_custom_option_stock}}';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['custom_option_key', 'product_id', 'price'], 'required'],
            [['stock'], 'integer'],
            [['price'], 'number'],
            [['custom_option_key'], 'string', 'max' => 255],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'product_id' => '产品id',
            'custom_option_key' => '产品自定义的属性key',
            'stock' => '库存数量',
            'price' => '价格',
        ];
    }

    public function getProduct()
    {
        return $this->hasOne(Product::className(), ['id' => 'product_id']);
    }

    public static function findByProductIdAndKey($product_id, $key)
    {
        return static::find()
            ->where(['product_id' => $product_id])
            ->andWhere(['custom_option_key' => $key])
            ->one();
    }
}
