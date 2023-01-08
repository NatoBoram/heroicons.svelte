import type { Meta, StoryObj } from '@storybook/svelte'
import { Camera as CameraSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: CameraSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<CameraSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Camera: Story = {}
