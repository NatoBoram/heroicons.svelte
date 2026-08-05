<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import XCircleSvelte from '../../../lib/20/solid/x-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: XCircleSvelte,
		args: { class: '' },
	})
</script>

<Story name="XCircle" />
