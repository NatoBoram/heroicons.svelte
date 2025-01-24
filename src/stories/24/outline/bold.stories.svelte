<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BoldSvelte from '../../../lib/24/outline/bold.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: BoldSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Bold" />
