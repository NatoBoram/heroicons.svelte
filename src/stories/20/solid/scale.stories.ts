import type { Meta, StoryObj } from '@storybook/svelte'
import { Scale as ScaleSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: ScaleSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ScaleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Scale: Story = {}
