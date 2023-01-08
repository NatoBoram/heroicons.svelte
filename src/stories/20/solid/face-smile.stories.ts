import type { Meta, StoryObj } from '@storybook/svelte'
import { FaceSmile as FaceSmileSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: FaceSmileSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<FaceSmileSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const FaceSmile: Story = {}
