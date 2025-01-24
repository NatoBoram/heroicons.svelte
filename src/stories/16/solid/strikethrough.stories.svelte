<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import StrikethroughSvelte from '../../../lib/16/solid/strikethrough.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: StrikethroughSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Strikethrough" />
