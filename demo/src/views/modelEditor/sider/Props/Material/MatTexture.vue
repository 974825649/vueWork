<template>
    <div class="texture">
        <div class="mat-title">
            纹理
        </div>
<!--        纹理设置-->
        <Row type="flex" justify="center" align="middle" class="t-setWrap">
            <div class="t-set">

                <Row type="flex" justify="start" align="middle" class="useImg">
                    <Checkbox v-model="textureSet.useImg">使用纹理图片</Checkbox>
                </Row>
                <div class="getFile">
                    <Input v-model="textureSet.imgUrl" size="small" placeholder="选择上传的图片"  />
                    <Upload
                            multiple
                            action="//jsonplaceholder.typicode.com/posts/">
                        <Button icon="ios-cloud-upload-outline">上传图片</Button>
                    </Upload>
                </div>

                <Row type="flex" justify="center" align="middle" class="setImg">
                    <Col span="12" class="setImg-aspect">
                        <Row type="flex" justify="space-around" align="top" class="">
                            <InputNumber    size="small"></InputNumber>
                            <InputNumber    size="small"></InputNumber>
                        </Row>
                    </Col>
                    <Col span="12" class="setImg-color">
                        <Row type="flex" justify="space-around" align="top" class="">
                            <Checkbox v-model="textureSet.setColor">着色</Checkbox>
                            <div>
                                <span class="reset"></span> <span>重置颜色</span>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </div>
        </Row>

    </div>
</template>

<script>
    export default {
        name: "m_texture",
        data(){
            return {
                textureSet: {
                    useImg: false,
                    imgUrl: '../img',
                    setColor: false
                }
            }
        }
    }
</script>

<style lang="scss" type="text/scss" scoped>
    .texture{
        .t-setWrap{
            width: 100%;
            height: 1.3rem;
            .t-set{
                width: 86%;
                height: 80%;
                .useImg{
                    height: 25%;
                }
                .getFile{
                    height: 25%;
                    .ivu-input-wrapper{
                        width: 70%;
                    }
                    .ivu-upload{
                        display: inline-block;
                        margin-left: 0.05rem;
                        width: 20%;
                        vertical-align: top;
                    }
                }
                .setImg{
                    height: 50%;
                    .ivu-col{
                        height: 100%;
                        .ivu-row-flex{
                            height: 100%;
                            flex-direction: column;
                        }
                    }
                    .setImg-aspect{
                        height: 100%;
                    }

                    .setImg-color {
                        height: 100%;
                        .reset {
                            vertical-align: middle;
                            display: inline-block;
                            width: .2rem;
                            height: .2rem;
                            margin-right: .05rem;
                            background: $backgroundGray;
                        }
                    }
                }
            }
        }
    }
</style>