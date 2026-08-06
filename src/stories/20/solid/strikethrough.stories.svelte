<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import StrikethroughSvelte from '../../../lib/20/solid/strikethrough.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: StrikethroughSvelte,
		args: { class: '' },
	})
</script>

<Story name="Strikethrough" />
