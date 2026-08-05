<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowRightSvelte from '../../../lib/20/solid/arrow-right.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ArrowRightSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowRight" />
