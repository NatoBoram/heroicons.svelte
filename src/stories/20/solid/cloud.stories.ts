import type { Meta, StoryObj } from '@storybook/svelte'
import CloudSvelte from '../../../lib/20/solid/cloud.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: CloudSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<CloudSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Cloud: Story = {}
