<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import SlashSvelte from '../../../lib/24/outline/slash.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: SlashSvelte,
		args: { class: '' },
	})
</script>

<Story name="Slash" />
