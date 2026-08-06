<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowLongDownSvelte from '../../../lib/20/solid/arrow-long-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ArrowLongDownSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowLongDown" />
